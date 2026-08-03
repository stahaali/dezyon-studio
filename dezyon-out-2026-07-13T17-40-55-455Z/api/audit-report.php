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

$reportId = trim((string) ($_GET['id'] ?? ''));

if ($reportId === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Report id is required.']);
    exit;
}

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
        'SELECT report_uuid, url, mobile_report, desktop_report, recommendations, created_at
         FROM audit_reports WHERE report_uuid = :report_uuid LIMIT 1'
    );
    $stmt->execute([':report_uuid' => $reportId]);
    $row = $stmt->fetch();

    if (!$row) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Report not found.']);
        exit;
    }

    $report = [
        'id' => $row['report_uuid'],
        'url' => $row['url'],
        'analyzedAt' => gmdate('c', strtotime((string) $row['created_at'])),
        'mobile' => json_decode((string) $row['mobile_report'], true),
        'desktop' => json_decode((string) $row['desktop_report'], true),
        'recommendations' => json_decode((string) $row['recommendations'], true),
    ];

    echo json_encode(['success' => true, 'report' => $report]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to load report: ' . $exception->getMessage(),
    ]);
}
