<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/mailer.php';

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'step' => 'config',
        'message' => 'api/config.php is missing on the server.',
    ], JSON_PRETTY_PRINT);
    exit;
}

$config = require $configPath;

$smtpUser = trim((string) ($config['smtp_user'] ?? ''));
$smtpPass = trim((string) ($config['smtp_pass'] ?? ''));
$recipients = parseRecipientEmails($config['recipient_email'] ?? '');
$fromEmail = trim((string) ($config['mail_from'] ?? 'hello@dezyonstudio.com'));

$result = [
    'ok' => true,
    'smtp_user' => $smtpUser,
    'smtp_configured' => $smtpUser !== '' && $smtpPass !== '',
    'recipient_count' => count($recipients),
    'recipients' => $recipients,
    'mail_from' => $fromEmail,
    'steps' => [],
];

if (!$result['smtp_configured']) {
    $result['ok'] = false;
    $result['steps'][] = [
        'name' => 'smtp_password',
        'ok' => false,
        'message' => 'SMTP password is empty. Set SMTP_PASSWORD in .env, run npm run build, and upload out/api/config.php.',
    ];
}

if ($recipients === []) {
    $result['ok'] = false;
    $result['steps'][] = [
        'name' => 'recipients',
        'ok' => false,
        'message' => 'No valid recipient emails configured.',
    ];
}

if ($result['smtp_configured']) {
    foreach (getSmtpProfiles($config) as $profile) {
        $socket = createSmtpSocket($profile['host'], $profile['port'], $profile['encryption']);
        if (!is_resource($socket)) {
            $result['steps'][] = [
                'name' => 'smtp_connect',
                'ok' => false,
                'host' => $profile['host'],
                'port' => $profile['port'],
                'encryption' => $profile['encryption'],
                'message' => 'Could not connect to SMTP server.',
            ];
            continue;
        }

        $greeting = smtpExpect($socket, [220]);
        if (!$greeting['ok']) {
            fclose($socket);
            $result['steps'][] = [
                'name' => 'smtp_greeting',
                'ok' => false,
                'host' => $profile['host'],
                'message' => $greeting['response'],
            ];
            continue;
        }

        $ehloDomain = preg_replace('/[^a-z0-9.-]/i', '', (string) ($_SERVER['HTTP_HOST'] ?? 'dezyonstudio.com')) ?: 'dezyonstudio.com';
        $ehlo = smtpCommand($socket, "EHLO {$ehloDomain}", [250]);
        if (!$ehlo['ok']) {
            fclose($socket);
            $result['steps'][] = [
                'name' => 'smtp_ehlo',
                'ok' => false,
                'host' => $profile['host'],
                'message' => $ehlo['response'],
            ];
            continue;
        }

        if ($profile['encryption'] === 'tls') {
            $startTls = smtpCommand($socket, 'STARTTLS', [220]);
            if (!$startTls['ok'] || !stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                fclose($socket);
                $result['steps'][] = [
                    'name' => 'smtp_tls',
                    'ok' => false,
                    'host' => $profile['host'],
                    'message' => 'TLS handshake failed.',
                ];
                continue;
            }

            $ehlo = smtpCommand($socket, "EHLO {$ehloDomain}", [250]);
            if (!$ehlo['ok']) {
                fclose($socket);
                continue;
            }
        }

        $auth = smtpCommand($socket, 'AUTH LOGIN', [334]);
        $userStep = $auth['ok'] ? smtpCommand($socket, base64_encode($smtpUser), [334]) : ['ok' => false, 'response' => $auth['response']];
        $passStep = $userStep['ok'] ? smtpCommand($socket, base64_encode($smtpPass), [235]) : ['ok' => false, 'response' => $userStep['response']];

        smtpCommand($socket, 'QUIT', [221]);
        fclose($socket);

        $step = [
            'name' => 'smtp_auth',
            'ok' => $passStep['ok'],
            'host' => $profile['host'],
            'port' => $profile['port'],
            'encryption' => $profile['encryption'],
            'message' => $passStep['ok'] ? 'SMTP login successful.' : $passStep['response'],
        ];
        $result['steps'][] = $step;

        if ($passStep['ok']) {
            break;
        }
    }

    $authOk = false;
    foreach ($result['steps'] as $step) {
        if (($step['name'] ?? '') === 'smtp_auth' && ($step['ok'] ?? false)) {
            $authOk = true;
            break;
        }
    }

    if (!$authOk) {
        $result['ok'] = false;
        $result['hint'] = 'Check hello@dezyonstudio.com email password and enable Titan SMTP in Hostinger webmail settings.';
    }
}

if (!$result['ok']) {
    http_response_code(500);
}

echo json_encode($result, JSON_PRETTY_PRINT);
