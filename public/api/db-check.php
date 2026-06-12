<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'step' => 'config',
        'message' => 'api/config.php is missing on the server.',
    ]);
    exit;
}

$config = require $configPath;
require_once __DIR__ . '/schema.php';

$result = [
    'ok' => true,
    'database' => $config['db_name'],
    'steps' => [],
];

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

    $pdo->query('SELECT 1');
    $result['steps'][] = ['name' => 'connect', 'ok' => true];

    ensureContactsSchema($pdo);
    $result['steps'][] = ['name' => 'schema_fix', 'ok' => true];

    $columns = $pdo->query('SHOW COLUMNS FROM contacts')->fetchAll(PDO::FETCH_COLUMN);
    $required = ['full_name', 'email', 'subject', 'message', 'created_at'];
    $missing = array_values(array_diff($required, $columns));
    $result['steps'][] = [
        'name' => 'contacts_columns',
        'ok' => count($missing) === 0,
        'columns' => $columns,
        'missing' => $missing,
    ];

    $stmt = $pdo->prepare(
        'INSERT INTO contacts (full_name, email, subject, message) VALUES (?, ?, ?, ?)'
    );
    $stmt->execute(['DB Check', 'dbcheck@dezyonstudio.com', 'Connection Test', 'Auto test row']);
    $insertId = (int) $pdo->lastInsertId();
    $pdo->prepare('DELETE FROM contacts WHERE id = ?')->execute([$insertId]);
    $result['steps'][] = ['name' => 'insert_test', 'ok' => true];

    $result['ok'] = !in_array(false, array_column($result['steps'], 'ok'), true);
    if (!$result['ok']) {
        http_response_code(500);
    }

    echo json_encode($result, JSON_PRETTY_PRINT);
} catch (Throwable $error) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'step' => 'error',
        'message' => $error->getMessage(),
        'hint' => 'Upload latest api/contact.php, api/schema.php, and api/db-check.php from out/api/.',
    ], JSON_PRETTY_PRINT);
}
