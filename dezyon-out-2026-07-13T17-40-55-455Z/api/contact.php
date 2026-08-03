<?php
declare(strict_types=1);

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
require_once __DIR__ . '/recaptcha.php';

$rawInput = file_get_contents('php://input');
$body = json_decode($rawInput ?: '', true);

if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body.']);
    exit;
}

$fullName = trim((string) ($body['full_name'] ?? $body['name'] ?? ''));
$email = trim((string) ($body['email'] ?? ''));
$subject = trim((string) ($body['subject'] ?? ''));
$message = trim((string) ($body['message'] ?? ''));

if ($fullName === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

$recaptchaToken = trim((string) ($body['recaptcha_token'] ?? $body['g-recaptcha-response'] ?? ''));
$recaptchaSecret = trim((string) ($config['recaptcha_secret'] ?? ''));

if ($recaptchaSecret === '') {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'reCAPTCHA is not configured on the server.']);
    exit;
}

if (!verifyRecaptchaToken($recaptchaToken, $recaptchaSecret)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please complete the reCAPTCHA verification.']);
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

    ensureContactsSchema($pdo);

    $stmt = $pdo->prepare(
        'INSERT INTO contacts (full_name, email, subject, message) VALUES (?, ?, ?, ?)'
    );
    $stmt->execute([$fullName, $email, $subject, $message]);

    $insertId = (int) $pdo->lastInsertId();
    $timestamp = date('F j, Y g:i A T');

    $mailSubject = 'New Contact Form Submission - ' . $subject;
    $mailBody = "Full Name: {$fullName}\nEmail: {$email}\nSubject: {$subject}\nMessage:\n{$message}\nTimestamp: {$timestamp}";

    $responseBody = json_encode([
        'success' => true,
        'message' => 'Message sent successfully.',
        'id' => $insertId,
        'mail_sent' => true,
    ]);

    http_response_code(201);
    header('Content-Length: ' . strlen((string) $responseBody));
    header('Connection: close');
    echo $responseBody;

    if (function_exists('fastcgi_finish_request')) {
        fastcgi_finish_request();
    } else {
        while (ob_get_level() > 0) {
            ob_end_flush();
        }
        flush();
    }

    require_once __DIR__ . '/mailer.php';

    $mailResult = sendContactNotificationEmails($config, $mailSubject, $mailBody, $email);
    if (!$mailResult['success']) {
        logMailEvent('Background contact email failed: ' . ($mailResult['error'] ?? 'mail_failed'));
    }
} catch (PDOException $error) {
    $errorCode = (int) $error->getCode();
    $isMissingTable = $errorCode === 1146
        || stripos($error->getMessage(), 'contacts') !== false;

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $isMissingTable
            ? 'Database table missing. Import database/contact-hostinger.sql in Hostinger phpMyAdmin.'
            : 'Could not save your message. Please try again later.',
    ]);
} catch (Throwable $error) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to process your request. Please try again later.',
    ]);
}
