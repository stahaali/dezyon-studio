<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server configuration missing.']);
    exit;
}

$config = require $configPath;
require_once __DIR__ . '/schema.php';

$limit = min(20, max(1, (int) ($_GET['limit'] ?? 10)));

try {
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
        'SELECT report_uuid, url, mobile_report, desktop_report, created_at
         FROM audit_reports
         ORDER BY created_at DESC
         LIMIT :limit'
    );
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->execute();

    $history = [];

    while ($row = $stmt->fetch()) {
        $mobile = json_decode((string) $row['mobile_report'], true);
        $desktop = json_decode((string) $row['desktop_report'], true);

        $history[] = [
            'id' => $row['report_uuid'],
            'url' => $row['url'],
            'analyzedAt' => gmdate('c', strtotime((string) $row['created_at'])),
            'mobileScore' => $mobile['performance']['score'] ?? null,
            'desktopScore' => $desktop['performance']['score'] ?? null,
        ];
    }

    echo json_encode(['success' => true, 'history' => $history]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to load history: ' . $exception->getMessage(),
    ]);
}
