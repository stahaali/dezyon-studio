<?php
declare(strict_types=1);

set_time_limit(300);
ini_set('max_execution_time', '300');

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server configuration missing. Create api/config.php from config.example.php.',
    ]);
    exit;
}

$config = require $configPath;
require_once __DIR__ . '/schema.php';
require_once __DIR__ . '/pagespeed-lib.php';

$apiKey = trim((string) ($config['pagespeed_api_key'] ?? ''));
if ($apiKey === '') {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'PageSpeed API key is not configured. Set PAGESPEED_API_KEY in .env and rebuild.',
    ]);
    exit;
}

$rawInput = file_get_contents('php://input');
$body = json_decode($rawInput ?: '', true);

if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body.']);
    exit;
}

try {
    $url = auditNormalizeUrl((string) ($body['url'] ?? ''));
    $lighthouseResults = auditFetchPageSpeedPair($url, $apiKey);
    $mobileLighthouse = $lighthouseResults['mobile'];
    $desktopLighthouse = $lighthouseResults['desktop'];

    $reportId = auditGenerateUuid();
    $analyzedAt = gmdate('c');

    $report = [
        'id' => $reportId,
        'url' => $url,
        'analyzedAt' => $analyzedAt,
        'mobile' => auditBuildStrategyReport($mobileLighthouse, 'mobile'),
        'desktop' => auditBuildStrategyReport($desktopLighthouse, 'desktop'),
        'recommendations' => [],
    ];

    $report['recommendations'] = auditBuildRecommendations($report);

    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=utf8mb4',
        $config['db_host'],
        $config['db_name']
    );

    $pdo = new PDO($dsn, $config['db_user'], $config['db_pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    ensureAuditReportsSchema($pdo);

    $stmt = $pdo->prepare(
        'INSERT INTO audit_reports (report_uuid, url, mobile_report, desktop_report, recommendations, created_at)
         VALUES (:report_uuid, :url, :mobile_report, :desktop_report, :recommendations, UTC_TIMESTAMP())'
    );

    $stmt->execute([
        ':report_uuid' => $reportId,
        ':url' => $url,
        ':mobile_report' => json_encode($report['mobile'], JSON_UNESCAPED_UNICODE),
        ':desktop_report' => json_encode($report['desktop'], JSON_UNESCAPED_UNICODE),
        ':recommendations' => json_encode($report['recommendations'], JSON_UNESCAPED_UNICODE),
    ]);

    echo json_encode([
        'success' => true,
        'report' => $report,
    ]);
} catch (InvalidArgumentException $exception) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => $exception->getMessage()]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Analysis failed: ' . $exception->getMessage(),
    ]);
}
