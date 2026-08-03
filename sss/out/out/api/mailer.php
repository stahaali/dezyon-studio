<?php
declare(strict_types=1);

function parseRecipientEmails(mixed $value): array
{
    if (is_array($value)) {
        $items = $value;
    } else {
        $items = explode(',', (string) $value);
    }

    $emails = [];

    foreach ($items as $item) {
        $email = trim((string) $item);
        if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emails[] = $email;
        }
    }

    return array_values(array_unique($emails));
}

function logMailEvent(string $message): void
{
    $line = sprintf("[%s] %s\n", date('Y-m-d H:i:s'), $message);
    @file_put_contents(__DIR__ . '/mail.log', $line, FILE_APPEND);
}

function encodeMailHeader(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function buildMailHeaders(
    string $fromEmail,
    string $fromName,
    string $replyTo,
    string $domain
): string {
    $fromHeader = encodeMailHeader($fromName) . " <{$fromEmail}>";

    return implode("\r\n", [
        'MIME-Version: 1.0',
        "From: {$fromHeader}",
        "Reply-To: {$replyTo}",
        "Return-Path: <{$fromEmail}>",
        "Message-ID: <" . time() . '.' . bin2hex(random_bytes(8)) . "@{$domain}>",
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: DezyonStudio-ContactForm',
    ]);
}

function sendPhpMailMessage(
    string $recipient,
    string $subject,
    string $body,
    string $replyTo,
    string $fromEmail,
    string $fromName,
    string $domain
): bool {
    $headers = buildMailHeaders($fromEmail, $fromName, $replyTo, $domain);

    return mail($recipient, $subject, $body, $headers, "-f{$fromEmail}");
}

function smtpRead($socket): string
{
    $response = '';

    while (is_resource($socket) && !feof($socket)) {
        $line = fgets($socket, 515);
        if ($line === false) {
            break;
        }

        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }

    return $response;
}

function smtpExpect($socket, array $codes): array
{
    $response = smtpRead($socket);
    $code = (int) substr($response, 0, 3);

    return [
        'ok' => in_array($code, $codes, true),
        'code' => $code,
        'response' => trim($response),
    ];
}

function smtpCommand($socket, string $command, array $expectedCodes): array
{
    fwrite($socket, $command . "\r\n");

    return smtpExpect($socket, $expectedCodes);
}

function createSmtpSocket(string $host, int $port, string $encryption): mixed
{
    $remote = $encryption === 'ssl'
        ? "ssl://{$host}:{$port}"
        : "tcp://{$host}:{$port}";

    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => false,
        ],
    ]);

    $socket = @stream_socket_client(
        $remote,
        $errorCode,
        $errorMessage,
        8,
        STREAM_CLIENT_CONNECT,
        $context
    );

    if (!is_resource($socket)) {
        logMailEvent("SMTP connect failed ({$encryption}://{$host}:{$port}): [{$errorCode}] {$errorMessage}");
        return false;
    }

    stream_set_timeout($socket, 12);

    return $socket;
}

function authenticateSmtpSession(
    mixed $socket,
    string $host,
    int $port,
    string $encryption,
    string $user,
    string $pass,
    string $domain
): array {
    $greeting = smtpExpect($socket, [220]);
    if (!$greeting['ok']) {
        logMailEvent("SMTP greeting failed on {$host}:{$port} - {$greeting['response']}");
        return ['success' => false, 'error' => 'smtp_greeting_failed'];
    }

    $ehloDomain = preg_replace('/[^a-z0-9.-]/i', '', $domain) ?: 'dezyonstudio.com';
    $ehlo = smtpCommand($socket, "EHLO {$ehloDomain}", [250]);
    if (!$ehlo['ok']) {
        logMailEvent("SMTP EHLO failed on {$host}:{$port} - {$ehlo['response']}");
        return ['success' => false, 'error' => 'smtp_ehlo_failed'];
    }

    if ($encryption === 'tls') {
        $startTls = smtpCommand($socket, 'STARTTLS', [220]);
        if (!$startTls['ok']) {
            logMailEvent("SMTP STARTTLS failed on {$host}:{$port} - {$startTls['response']}");
            return ['success' => false, 'error' => 'smtp_starttls_failed'];
        }

        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            logMailEvent("SMTP TLS handshake failed on {$host}:{$port}");
            return ['success' => false, 'error' => 'smtp_tls_failed'];
        }

        $ehlo = smtpCommand($socket, "EHLO {$ehloDomain}", [250]);
        if (!$ehlo['ok']) {
            logMailEvent("SMTP EHLO after TLS failed on {$host}:{$port} - {$ehlo['response']}");
            return ['success' => false, 'error' => 'smtp_ehlo_failed'];
        }
    }

    $auth = smtpCommand($socket, 'AUTH LOGIN', [334]);
    if (!$auth['ok']) {
        logMailEvent("SMTP AUTH prompt failed on {$host}:{$port} - {$auth['response']}");
        return ['success' => false, 'error' => 'smtp_auth_failed'];
    }

    $userStep = smtpCommand($socket, base64_encode($user), [334]);
    if (!$userStep['ok']) {
        logMailEvent("SMTP username rejected on {$host}:{$port} - {$userStep['response']}");
        return ['success' => false, 'error' => 'smtp_auth_failed'];
    }

    $passStep = smtpCommand($socket, base64_encode($pass), [235]);
    if (!$passStep['ok']) {
        logMailEvent("SMTP password rejected on {$host}:{$port} - {$passStep['response']}");
        return ['success' => false, 'error' => 'smtp_auth_failed'];
    }

    return ['success' => true, 'error' => ''];
}

function buildOutboundMailMessage(
    array $recipients,
    string $subject,
    string $body,
    string $replyTo,
    string $fromEmail,
    string $fromName,
    string $domain
): string {
    $headers = buildMailHeaders($fromEmail, $fromName, $replyTo, $domain);
    $encodedSubject = encodeMailHeader($subject);
    $normalizedBody = str_replace(["\r\n", "\r"], "\n", $body);
    $normalizedBody = str_replace("\n", "\r\n", $normalizedBody);
    $normalizedBody = preg_replace('/^\./m', '..', $normalizedBody) ?? $normalizedBody;

    $primaryTo = $recipients[0];
    $bccRecipients = array_slice($recipients, 1);
    $lines = [
        "To: <{$primaryTo}>",
    ];

    if ($bccRecipients !== []) {
        $lines[] = 'Bcc: ' . implode(', ', array_map(
            static fn(string $email): string => "<{$email}>",
            $bccRecipients
        ));
    }

    $lines[] = "Subject: {$encodedSubject}";
    $lines[] = $headers;
    $lines[] = '';
    $lines[] = $normalizedBody;
    $lines[] = '';

    return implode("\r\n", $lines);
}

function sendSmtpBulkMessageWithProfile(
    string $host,
    int $port,
    string $encryption,
    string $user,
    string $pass,
    array $recipients,
    string $subject,
    string $body,
    string $replyTo,
    string $fromEmail,
    string $fromName,
    string $domain
): array {
    if ($recipients === []) {
        return ['success' => false, 'error' => 'no_recipients'];
    }

    $socket = createSmtpSocket($host, $port, $encryption);
    if (!is_resource($socket)) {
        return ['success' => false, 'error' => 'smtp_connect_failed'];
    }

    $authResult = authenticateSmtpSession($socket, $host, $port, $encryption, $user, $pass, $domain);
    if (!$authResult['success']) {
        fclose($socket);
        return $authResult;
    }

    $mailFrom = smtpCommand($socket, "MAIL FROM:<{$fromEmail}>", [250]);
    if (!$mailFrom['ok']) {
        fclose($socket);
        logMailEvent("SMTP MAIL FROM failed on {$host}:{$port} - {$mailFrom['response']}");
        return ['success' => false, 'error' => 'smtp_mail_from_failed'];
    }

    foreach ($recipients as $recipient) {
        $rcptTo = smtpCommand($socket, "RCPT TO:<{$recipient}>", [250, 251]);
        if (!$rcptTo['ok']) {
            fclose($socket);
            logMailEvent("SMTP RCPT TO failed for {$recipient} on {$host}:{$port} - {$rcptTo['response']}");
            return ['success' => false, 'error' => 'smtp_rcpt_failed'];
        }
    }

    $data = smtpCommand($socket, 'DATA', [354]);
    if (!$data['ok']) {
        fclose($socket);
        logMailEvent("SMTP DATA failed on {$host}:{$port} - {$data['response']}");
        return ['success' => false, 'error' => 'smtp_data_failed'];
    }

    $message = buildOutboundMailMessage(
        $recipients,
        $subject,
        $body,
        $replyTo,
        $fromEmail,
        $fromName,
        $domain
    );

    fwrite($socket, $message . "\r\n.\r\n");

    $sent = smtpExpect($socket, [250]);
    if (!$sent['ok']) {
        fclose($socket);
        logMailEvent("SMTP message rejected on {$host}:{$port} - {$sent['response']}");
        return ['success' => false, 'error' => 'smtp_send_failed'];
    }

    smtpCommand($socket, 'QUIT', [221]);
    fclose($socket);

    return ['success' => true, 'error' => ''];
}

function sendSmtpMessageWithProfile(
    string $host,
    int $port,
    string $encryption,
    string $user,
    string $pass,
    string $recipient,
    string $subject,
    string $body,
    string $replyTo,
    string $fromEmail,
    string $fromName,
    string $domain
): array {
    return sendSmtpBulkMessageWithProfile(
        $host,
        $port,
        $encryption,
        $user,
        $pass,
        [$recipient],
        $subject,
        $body,
        $replyTo,
        $fromEmail,
        $fromName,
        $domain
    );
}

function sendPhpMailMessageToRecipients(
    array $recipients,
    string $subject,
    string $body,
    string $replyTo,
    string $fromEmail,
    string $fromName,
    string $domain
): bool {
    if ($recipients === []) {
        return false;
    }

    $headers = buildMailHeaders($fromEmail, $fromName, $replyTo, $domain);
    $bccRecipients = array_slice($recipients, 1);

    if ($bccRecipients !== []) {
        $headers .= "\r\nBcc: " . implode(', ', array_map(
            static fn(string $email): string => "<{$email}>",
            $bccRecipients
        ));
    }

    return mail($recipients[0], $subject, $body, $headers, "-f{$fromEmail}");
}

function getSmtpProfiles(array $config): array
{
    $host = trim((string) ($config['smtp_host'] ?? 'smtp.hostinger.com'));
    $port = (int) ($config['smtp_port'] ?? 465);
    $encryption = strtolower(trim((string) ($config['smtp_encryption'] ?? 'ssl')));

    $profiles = [
        ['host' => $host, 'port' => $port, 'encryption' => $encryption],
    ];

    $fallbackHost = trim((string) ($config['smtp_fallback_host'] ?? ''));
    if ($fallbackHost !== '' && $fallbackHost !== $host) {
        $profiles[] = [
            'host' => $fallbackHost,
            'port' => (int) ($config['smtp_fallback_port'] ?? 465),
            'encryption' => strtolower(trim((string) ($config['smtp_fallback_encryption'] ?? 'ssl'))),
        ];
    }

    return $profiles;
}

function sendSmtpBulkMessage(
    array $config,
    array $recipients,
    string $subject,
    string $body,
    string $replyTo,
    string $fromEmail,
    string $fromName,
    string $domain
): array {
    $user = trim((string) ($config['smtp_user'] ?? $fromEmail));
    $pass = (string) ($config['smtp_pass'] ?? '');

    if ($user === '' || $pass === '') {
        return ['success' => false, 'error' => 'smtp_not_configured'];
    }

    foreach (getSmtpProfiles($config) as $profile) {
        $result = sendSmtpBulkMessageWithProfile(
            $profile['host'],
            $profile['port'],
            $profile['encryption'],
            $user,
            $pass,
            $recipients,
            $subject,
            $body,
            $replyTo,
            $fromEmail,
            $fromName,
            $domain
        );

        if ($result['success']) {
            logMailEvent(
                'SMTP sent to ' . count($recipients) . " recipient(s) via {$profile['host']}:{$profile['port']} ({$profile['encryption']})"
            );
            return $result;
        }
    }

    return ['success' => false, 'error' => 'smtp_send_failed'];
}

function sendSmtpMessage(
    array $config,
    string $recipient,
    string $subject,
    string $body,
    string $replyTo,
    string $fromEmail,
    string $fromName,
    string $domain
): array {
    return sendSmtpBulkMessage(
        $config,
        [$recipient],
        $subject,
        $body,
        $replyTo,
        $fromEmail,
        $fromName,
        $domain
    );
}

function sendContactNotificationEmails(
    array $config,
    string $subject,
    string $body,
    string $replyTo
): array {
    $recipients = parseRecipientEmails(
        $config['recipient_email'] ?? 'hello@dezyonstudio.com, staha086@gmail.com, sc.rma.786@gmail.com, allahfinal@hotmail.com'
    );

    if ($recipients === []) {
        logMailEvent('No valid recipient emails configured.');
        return ['success' => false, 'error' => 'no_recipients'];
    }

    $fromEmail = trim((string) ($config['mail_from'] ?? 'hello@dezyonstudio.com'));
    $fromName = trim((string) ($config['mail_from_name'] ?? 'Dezyon Studio'));
    $domain = preg_replace('/^www\./i', '', (string) ($_SERVER['HTTP_HOST'] ?? 'dezyonstudio.com'));

    if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
        $fromEmail = 'hello@dezyonstudio.com';
    }

    $smtpPass = trim((string) ($config['smtp_pass'] ?? ''));
    $smtpUser = trim((string) ($config['smtp_user'] ?? $fromEmail));
    $smtpConfigured = $smtpPass !== '' && $smtpUser !== '';

    if (!$smtpConfigured) {
        logMailEvent('SMTP password missing. Trying PHP mail() fallback. Set SMTP_PASSWORD in .env for reliable delivery.');
    }

    if ($smtpConfigured) {
        $smtpResult = sendSmtpBulkMessage(
            $config,
            $recipients,
            $subject,
            $body,
            $replyTo,
            $fromEmail,
            $fromName,
            $domain
        );

        if ($smtpResult['success']) {
            return ['success' => true, 'error' => ''];
        }
    } else {
        $smtpResult = ['success' => false, 'error' => 'smtp_not_configured'];
    }

    $phpSent = sendPhpMailMessageToRecipients(
        $recipients,
        $subject,
        $body,
        $replyTo,
        $fromEmail,
        $fromName,
        $domain
    );

    if ($phpSent) {
        logMailEvent('PHP mail() fallback sent to ' . count($recipients) . ' recipient(s)');
        return ['success' => true, 'error' => ''];
    }

    $error = $smtpResult['error'] !== '' ? $smtpResult['error'] : 'php_mail_failed';
    logMailEvent('Failed to send contact email to all recipients: ' . $error);

    return [
        'success' => false,
        'error' => $error,
        'failed_recipients' => $recipients,
    ];
}
