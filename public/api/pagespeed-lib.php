<?php
declare(strict_types=1);

function auditNormalizeUrl(string $input): string
{
    $trimmed = trim($input);

    if ($trimmed === '') {
        throw new InvalidArgumentException('Please enter a website URL.');
    }

    if (!preg_match('/^https?:\/\//i', $trimmed)) {
        $trimmed = 'https://' . $trimmed;
    }

    if (!filter_var($trimmed, FILTER_VALIDATE_URL)) {
        throw new InvalidArgumentException('Please provide a valid website URL.');
    }

    return $trimmed;
}

function auditBuildPageSpeedUrl(string $url, string $strategy, string $apiKey): string
{
    $query = http_build_query([
        'url' => $url,
        'key' => $apiKey,
        'strategy' => $strategy,
    ]);

    $categories = ['performance', 'accessibility', 'best-practices', 'seo'];
    foreach ($categories as $category) {
        $query .= '&category=' . rawurlencode($category);
    }

    return 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?' . $query;
}

function auditParsePageSpeedResponse(string $response): array
{
    $decoded = json_decode($response, true);

    if (!is_array($decoded)) {
        throw new RuntimeException('Invalid response from PageSpeed Insights API.');
    }

    if (isset($decoded['error']['message'])) {
        throw new RuntimeException((string) $decoded['error']['message']);
    }

    if (!isset($decoded['lighthouseResult']) || !is_array($decoded['lighthouseResult'])) {
        throw new RuntimeException('PageSpeed report did not include Lighthouse results.');
    }

    return $decoded['lighthouseResult'];
}

function auditFetchPageSpeed(string $url, string $strategy, string $apiKey): array
{
    $endpoint = auditBuildPageSpeedUrl($url, $strategy, $apiKey);

    if (function_exists('curl_init')) {
        $ch = curl_init($endpoint);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 120,
            CURLOPT_CONNECTTIMEOUT => 30,
            CURLOPT_HTTPHEADER => ['Accept: application/json'],
        ]);

        $response = curl_exec($ch);
        $errno = curl_errno($ch);

        if ($response === false || $errno !== 0) {
            curl_close($ch);
            throw new RuntimeException('Unable to reach Google PageSpeed Insights API.');
        }

        curl_close($ch);

        return auditParsePageSpeedResponse($response);
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'GET',
            'timeout' => 120,
            'header' => "Accept: application/json\r\n",
        ],
    ]);

    $response = @file_get_contents($endpoint, false, $context);

    if ($response === false) {
        throw new RuntimeException('Unable to reach Google PageSpeed Insights API.');
    }

    return auditParsePageSpeedResponse($response);
}

function auditFetchPageSpeedPair(string $url, string $apiKey): array
{
    if (!function_exists('curl_multi_init')) {
        return [
            'mobile' => auditFetchPageSpeed($url, 'mobile', $apiKey),
            'desktop' => auditFetchPageSpeed($url, 'desktop', $apiKey),
        ];
    }

    $requests = [
        'mobile' => auditBuildPageSpeedUrl($url, 'mobile', $apiKey),
        'desktop' => auditBuildPageSpeedUrl($url, 'desktop', $apiKey),
    ];

    $multiHandle = curl_multi_init();
    $handles = [];

    foreach ($requests as $strategy => $endpoint) {
        $handle = curl_init($endpoint);
        curl_setopt_array($handle, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 120,
            CURLOPT_CONNECTTIMEOUT => 30,
            CURLOPT_HTTPHEADER => ['Accept: application/json'],
        ]);
        curl_multi_add_handle($multiHandle, $handle);
        $handles[$strategy] = $handle;
    }

    $running = null;

    do {
        $status = curl_multi_exec($multiHandle, $running);
        if ($running > 0) {
            curl_multi_select($multiHandle, 1.0);
        }
    } while ($running > 0 && $status === CURLM_OK);

    $results = [];

    foreach ($handles as $strategy => $handle) {
        $response = curl_multi_getcontent($handle);
        $errno = curl_errno($handle);

        if ($response === false || $errno !== 0) {
            foreach ($handles as $cleanupHandle) {
                curl_multi_remove_handle($multiHandle, $cleanupHandle);
                curl_close($cleanupHandle);
            }
            curl_multi_close($multiHandle);
            throw new RuntimeException(
                'Unable to reach Google PageSpeed Insights API (' . $strategy . ').'
            );
        }

        $results[$strategy] = auditParsePageSpeedResponse($response);
        curl_multi_remove_handle($multiHandle, $handle);
        curl_close($handle);
    }

    curl_multi_close($multiHandle);

    return [
        'mobile' => $results['mobile'],
        'desktop' => $results['desktop'],
    ];
}

function auditScore(?float $score): ?int
{
    if ($score === null) {
        return null;
    }

    return (int) round($score * 100);
}

function auditGetAudit(array $audits, string $id): ?array
{
    if (!isset($audits[$id]) || !is_array($audits[$id])) {
        return null;
    }

    return $audits[$id];
}

function auditDisplayValue(array $audits, string $id): ?string
{
    $audit = auditGetAudit($audits, $id);

    return isset($audit['displayValue']) ? (string) $audit['displayValue'] : null;
}

function auditGetStatus(array $audit): string
{
    if (!isset($audit['score']) || $audit['score'] === null) {
        return 'notApplicable';
    }

    if ((float) $audit['score'] >= 0.9) {
        return 'passed';
    }

    $mode = (string) ($audit['scoreDisplayMode'] ?? '');
    if ($mode === 'informative' || $mode === 'manual') {
        return 'informative';
    }

    return 'failed';
}

function auditFlattenValue($value, ?string $key = null)
{
    if ($value === null) {
        return null;
    }

    if (is_string($value) || is_int($value) || is_float($value) || is_bool($value)) {
        return $value;
    }

    if (!is_array($value)) {
        return (string) $value;
    }

    $type = $value['type'] ?? null;

    if ($type === 'node') {
        return (string) ($value['snippet'] ?? $value['nodeLabel'] ?? $value['selector'] ?? 'Element');
    }

    if ($type === 'source-location' && !empty($value['url'])) {
        $line = isset($value['line']) ? ':' . $value['line'] : '';
        $column = isset($value['column']) ? ':' . $value['column'] : '';

        return (string) $value['url'] . $line . $column;
    }

    if ($type === 'text' && array_key_exists('value', $value)) {
        return (string) $value['value'];
    }

    if ($key === 'node') {
        return (string) ($value['snippet'] ?? $value['nodeLabel'] ?? $value['selector'] ?? 'Element');
    }

    return json_encode($value);
}

function auditSanitizeSubItems($value): array
{
    if (!is_array($value) || empty($value['items']) || !is_array($value['items'])) {
        return [];
    }

    $rows = [];
    foreach ($value['items'] as $item) {
        if (!is_array($item)) {
            continue;
        }

        $row = auditSanitizeRow($item);
        if ($row !== null) {
            $rows[] = $row;
        }
    }

    return $rows;
}

function auditSanitizeRow(array $item): ?array
{
    $row = [];

    foreach ($item as $key => $value) {
        $key = (string) $key;

        if ($key === 'subItems') {
            $subRows = auditSanitizeSubItems($value);
            if (count($subRows) > 0) {
                $row['__subItems'] = $subRows;
            }
            continue;
        }

        if ($value === null) {
            $row[$key] = null;
            continue;
        }

        if (is_string($value) || is_int($value) || is_float($value) || is_bool($value)) {
            $row[$key] = $value;
            continue;
        }

        $flattened = auditFlattenValue($value, $key);
        if ($flattened !== null) {
            $row[$key] = $flattened;
        }
    }

    return count($row) > 0 ? $row : null;
}

function auditParseHeadings(array $headings): array
{
    $parsedHeadings = [];

    foreach ($headings as $heading) {
        if (!is_array($heading) || empty($heading['key']) || empty($heading['label']) || empty($heading['valueType'])) {
            continue;
        }

        $parsed = [
            'key' => (string) $heading['key'],
            'label' => (string) $heading['label'],
            'valueType' => (string) $heading['valueType'],
        ];

        if (!empty($heading['displayUnit'])) {
            $parsed['displayUnit'] = (string) $heading['displayUnit'];
        }

        if (!empty($heading['subItemsHeading']['key'])) {
            $parsed['subItemsHeading'] = [
                'key' => (string) $heading['subItemsHeading']['key'],
                'valueType' => (string) ($heading['subItemsHeading']['valueType'] ?? 'text'),
            ];

            if (!empty($heading['subItemsHeading']['label'])) {
                $parsed['subItemsHeading']['label'] = (string) $heading['subItemsHeading']['label'];
            }
        }

        $parsedHeadings[] = $parsed;
    }

    return $parsedHeadings;
}

function auditExtractTableSection(array $section): ?array
{
    if (($section['type'] ?? null) !== 'table' || empty($section['headings']) || !is_array($section['headings'])) {
        return null;
    }

    $headings = auditParseHeadings($section['headings']);
    if (count($headings) === 0) {
        return null;
    }

    $items = [];
    foreach ($section['items'] ?? [] as $item) {
        if (!is_array($item)) {
            continue;
        }

        $row = auditSanitizeRow($item);
        if ($row !== null) {
            $items[] = $row;
        }
    }

    if (count($items) === 0) {
        return null;
    }

    return [
        'headings' => $headings,
        'items' => $items,
    ];
}

function auditExtractDetails(?array $details): ?array
{
    if ($details === null) {
        return null;
    }

    $type = $details['type'] ?? null;
    $skipTypes = ['filmstrip', 'screenshot', 'treemap-data'];

    if (is_string($type) && in_array($type, $skipTypes, true)) {
        return null;
    }

    if ($type === 'checklist' && !empty($details['items']) && is_array($details['items']) && !array_is_list($details['items'])) {
        $checks = [];
        foreach ($details['items'] as $item) {
            if (!is_array($item) || empty($item['label'])) {
                continue;
            }

            $checks[] = [
                'label' => (string) $item['label'],
                'passed' => (bool) ($item['value'] ?? false),
            ];
        }

        if (count($checks) > 0) {
            return [
                'type' => $type,
                'variant' => 'checklist',
                'checks' => $checks,
            ];
        }
    }

    if ($type === 'list' && !empty($details['items']) && is_array($details['items']) && array_is_list($details['items'])) {
        $tables = [];
        foreach ($details['items'] as $section) {
            if (!is_array($section)) {
                continue;
            }

            $table = auditExtractTableSection($section);
            if ($table !== null) {
                $tables[] = $table;
            }
        }

        if (count($tables) > 0) {
            return [
                'type' => $type,
                'variant' => 'list',
                'tables' => $tables,
            ];
        }
    }

    if (empty($details['headings']) || !is_array($details['headings']) || empty($details['items']) || !is_array($details['items'])) {
        return null;
    }

    $table = auditExtractTableSection([
        'type' => 'table',
        'headings' => $details['headings'],
        'items' => $details['items'],
    ]);

    if ($table === null) {
        return null;
    }

    return [
        'type' => is_string($type) ? $type : null,
        'variant' => 'table',
        'headings' => $table['headings'],
        'items' => $table['items'],
    ];
}

function auditItemFromAudit(array $audit, string $id): array
{
    $metricSavings = $audit['metricSavings'] ?? null;
    $hasSavings = false;

    if (is_array($metricSavings)) {
        foreach ($metricSavings as $value) {
            if (is_numeric($value) && (float) $value > 0) {
                $hasSavings = true;
                break;
            }
        }
    }

    $item = [
        'id' => $id,
        'title' => (string) ($audit['title'] ?? $id),
        'description' => (string) ($audit['description'] ?? ''),
        'displayValue' => $audit['displayValue'] ?? null,
        'status' => auditGetStatus($audit),
    ];

    if ($hasSavings) {
        $item['metricSavings'] = $metricSavings;
    }

    $details = auditExtractDetails($audit['details'] ?? null);
    if ($details !== null) {
        $item['details'] = $details;
    }

    return $item;
}

function auditFormatGroupTitle(string $groupId): string
{
    $clean = preg_replace('/^(a11y|seo|best-practices)-/', '', $groupId) ?? $groupId;
    $parts = explode('-', $clean);

    return implode(' ', array_map(static function (string $part): string {
        return ucfirst($part);
    }, $parts));
}

function auditSortGroups(array $groups, array $order): array
{
    $orderMap = array_flip($order);

    usort($groups, static function (array $left, array $right) use ($orderMap): int {
        $leftIndex = $orderMap[$left['id']] ?? PHP_INT_MAX;
        $rightIndex = $orderMap[$right['id']] ?? PHP_INT_MAX;

        return $leftIndex <=> $rightIndex;
    });

    return $groups;
}

function auditBuildGroupedCategory(array $lighthouse, string $categoryId, array $groupOrder): array
{
    $audits = $lighthouse['audits'] ?? [];
    $categories = $lighthouse['categories'] ?? [];
    $categoryGroups = $lighthouse['categoryGroups'] ?? [];
    $category = $categories[$categoryId] ?? [];
    $refs = $category['auditRefs'] ?? [];

    $groupsMap = [];
    $passedAudits = [];
    $notApplicable = [];

    foreach ($refs as $ref) {
        if (!is_array($ref)) {
            continue;
        }

        $id = (string) ($ref['id'] ?? '');
        $group = $ref['group'] ?? null;
        $audit = auditGetAudit($audits, $id);

        if ($audit === null || $group === 'hidden') {
            continue;
        }

        $item = auditItemFromAudit($audit, $id);

        if ($item['status'] === 'notApplicable') {
            $notApplicable[] = $item;
            continue;
        }

        if ($item['status'] === 'passed') {
            $passedAudits[] = $item;
            continue;
        }

        $groupId = is_string($group) ? $group : ($categoryId . '-general');
        if (!isset($groupsMap[$groupId])) {
            $groupsMap[$groupId] = [];
        }
        $groupsMap[$groupId][] = $item;
    }

    $groups = [];
    foreach ($groupsMap as $id => $items) {
        if (count($items) === 0) {
            continue;
        }

        $meta = $categoryGroups[$id] ?? [];
        $groups[] = [
            'id' => $id,
            'title' => (string) ($meta['title'] ?? auditFormatGroupTitle($id)),
            'description' => $meta['description'] ?? null,
            'items' => $items,
        ];
    }

    $groups = auditSortGroups($groups, $groupOrder);

    $issues = [];
    foreach ($groups as $group) {
        foreach ($group['items'] as $item) {
            if ($item['status'] === 'failed') {
                $issues[] = [
                    'id' => $item['id'],
                    'title' => $item['title'],
                    'description' => $item['description'],
                    'displayValue' => $item['displayValue'],
                    'passed' => false,
                ];
            }
        }
    }

    return [
        'score' => auditScore($category['score'] ?? null),
        'groups' => $groups,
        'passedAudits' => $passedAudits,
        'notApplicable' => $notApplicable,
        'issues' => $issues,
    ];
}

function auditExtractTreemap(array $audits): array
{
    $treemapAudit = auditGetAudit($audits, 'script-treemap-data');
    $nodes = $treemapAudit['details']['nodes'] ?? [];
    $result = [];

    foreach ($nodes as $node) {
        if (!is_array($node)) {
            continue;
        }

        $resourceBytes = (int) ($node['resourceBytes'] ?? 0);
        if ($resourceBytes <= 0) {
            continue;
        }

        $result[] = [
            'name' => (string) ($node['name'] ?? 'Unknown'),
            'resourceBytes' => $resourceBytes,
            'unusedBytes' => (int) ($node['unusedBytes'] ?? 0),
            'encodedBytes' => isset($node['encodedBytes']) ? (int) $node['encodedBytes'] : null,
        ];
    }

    usort($result, static function (array $left, array $right): int {
        return $right['resourceBytes'] <=> $left['resourceBytes'];
    });

    return $result;
}

function auditExtractFilmstrip(array $audits): array
{
    $filmstripAudit = auditGetAudit($audits, 'screenshot-thumbnails');
    $items = $filmstripAudit['details']['items'] ?? [];
    $result = [];

    foreach ($items as $item) {
        if (!is_array($item) || empty($item['data'])) {
            continue;
        }

        $result[] = [
            'timing' => (int) ($item['timing'] ?? $item['timestamp'] ?? 0),
            'data' => (string) $item['data'],
        ];
    }

    return $result;
}

function auditBuildPerformance(array $lighthouse): array
{
    $audits = $lighthouse['audits'] ?? [];
    $categories = $lighthouse['categories'] ?? [];
    $category = $categories['performance'] ?? [];
    $refs = $category['auditRefs'] ?? [];

    $insights = [];
    $diagnostics = [];
    $passedAudits = [];
    $notApplicable = [];

    foreach ($refs as $ref) {
        if (!is_array($ref)) {
            continue;
        }

        $id = (string) ($ref['id'] ?? '');
        $group = $ref['group'] ?? null;
        $audit = auditGetAudit($audits, $id);

        if ($audit === null || $group === 'hidden' || $group === 'metrics') {
            continue;
        }

        $item = auditItemFromAudit($audit, $id);

        if ($item['status'] === 'notApplicable') {
            $notApplicable[] = $item;
            continue;
        }

        if ($group === 'insights') {
            if ($item['status'] === 'passed') {
                $passedAudits[] = $item;
            } else {
                $insights[] = $item;
            }
            continue;
        }

        if ($group === 'diagnostics') {
            $diagnostics[] = $item;
            continue;
        }

        if ($item['status'] === 'passed') {
            $passedAudits[] = $item;
        }
    }

    return [
        'score' => auditScore($category['score'] ?? null),
        'fcp' => auditDisplayValue($audits, 'first-contentful-paint'),
        'lcp' => auditDisplayValue($audits, 'largest-contentful-paint'),
        'tbt' => auditDisplayValue($audits, 'total-blocking-time'),
        'cls' => auditDisplayValue($audits, 'cumulative-layout-shift'),
        'speedIndex' => auditDisplayValue($audits, 'speed-index'),
        'filmstrip' => auditExtractFilmstrip($audits),
        'treemap' => auditExtractTreemap($audits),
        'insights' => $insights,
        'diagnostics' => $diagnostics,
        'passedAudits' => $passedAudits,
        'notApplicable' => $notApplicable,
    ];
}

function auditIssueFromAudit(array $audit, string $id): array
{
    $score = $audit['score'] ?? null;

    return [
        'id' => $id,
        'title' => (string) ($audit['title'] ?? $id),
        'description' => (string) ($audit['description'] ?? ''),
        'displayValue' => $audit['displayValue'] ?? null,
        'passed' => $score === null ? true : (float) $score >= 0.9,
    ];
}

function auditBuildStrategyReport(array $lighthouse, string $strategy): array
{
    $audits = $lighthouse['audits'] ?? [];

    $imageAuditIds = [
        'uses-optimized-images',
        'modern-image-formats',
        'uses-responsive-images',
        'offscreen-images',
    ];

    $imageIssues = [];
    foreach ($imageAuditIds as $id) {
        $audit = auditGetAudit($audits, $id);
        if ($audit !== null && isset($audit['score']) && (float) $audit['score'] < 0.9) {
            $imageIssues[] = auditIssueFromAudit($audit, $id);
        }
    }

    $resourceSummary = auditGetAudit($audits, 'resource-summary');
    $javascriptSize = null;
    $cssSize = null;

    if ($resourceSummary !== null && isset($resourceSummary['details']['items'])) {
        foreach ($resourceSummary['details']['items'] as $item) {
            if (!is_array($item)) {
                continue;
            }

            $label = strtolower((string) ($item['label'] ?? ''));
            $size = isset($item['transferSize']) ? (int) $item['transferSize'] : 0;

            if ($label === 'script') {
                $javascriptSize = auditFormatBytes($size);
            }

            if ($label === 'stylesheet') {
                $cssSize = auditFormatBytes($size);
            }
        }
    }

    return [
        'strategy' => $strategy,
        'fetchedAt' => gmdate('c'),
        'performance' => auditBuildPerformance($lighthouse),
        'seo' => auditBuildGroupedCategory($lighthouse, 'seo', ['seo-content', 'seo-crawl', 'seo-mobile']),
        'accessibility' => auditBuildGroupedCategory($lighthouse, 'accessibility', [
            'a11y-names-labels',
            'a11y-navigation',
            'a11y-aria',
            'a11y-color-contrast',
            'a11y-tables-lists',
            'a11y-language',
            'a11y-best-practices',
            'a11y-audio-video',
        ]),
        'bestPractices' => auditBuildGroupedCategory($lighthouse, 'best-practices', [
            'best-practices-ux',
            'best-practices-trust-safety',
            'best-practices-browser-compat',
            'best-practices-general',
        ]),
        'technical' => [
            'pageSize' => auditDisplayValue($audits, 'total-byte-weight'),
            'requestCount' => auditDisplayValue($audits, 'network-requests'),
            'javascriptSize' => $javascriptSize,
            'cssSize' => $cssSize,
            'imageOptimization' => $imageIssues,
            'unusedCss' => auditDisplayValue($audits, 'unused-css-rules'),
            'unusedJavaScript' => auditDisplayValue($audits, 'unused-javascript'),
        ],
    ];
}

function auditFormatBytes(int $bytes): string
{
    if ($bytes < 1024) {
        return $bytes . ' B';
    }

    if ($bytes < 1048576) {
        return round($bytes / 1024, 1) . ' KiB';
    }

    return round($bytes / 1048576, 2) . ' MiB';
}

function auditGenerateUuid(): string
{
    $data = random_bytes(16);
    $data[6] = chr((ord($data[6]) & 0x0f) | 0x40);
    $data[8] = chr((ord($data[8]) & 0x3f) | 0x80);

    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

function auditBuildRecommendations(array $report): array
{
    $recommendations = [];
    $mobile = $report['mobile'];
    $desktop = $report['desktop'];

    if (($mobile['performance']['score'] ?? 100) < 70) {
        $recommendations[] = [
            'id' => 'perf-mobile',
            'priority' => 'high',
            'category' => 'Performance',
            'title' => 'Improve mobile performance score',
            'description' => 'Mobile performance is below 70. Optimize images, defer JavaScript, and improve server response time.',
        ];
    }

    foreach (['mobile', 'desktop'] as $strategy) {
        foreach ($report[$strategy]['seo']['issues'] as $issue) {
            if (!($issue['passed'] ?? true)) {
                $recommendations[] = [
                    'id' => 'seo-' . $strategy . '-' . $issue['id'],
                    'priority' => 'high',
                    'category' => 'SEO',
                    'title' => 'Fix: ' . $issue['title'],
                    'description' => $issue['description'],
                ];
            }
        }
    }

    if (count($recommendations) === 0) {
        $recommendations[] = [
            'id' => 'healthy',
            'priority' => 'low',
            'category' => 'Summary',
            'title' => 'Website is in good shape',
            'description' => 'Core Lighthouse scores look healthy. Keep monitoring performance after each deployment.',
        ];
    }

    return array_slice($recommendations, 0, 12);
}
