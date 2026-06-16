<?php
/**
 * Copy this file to config.php on the server and update values.
 * Do not commit config.php with real passwords.
 *
 * QUICK FIX (no rebuild): In Hostinger File Manager edit public_html/api/config.php
 * and set 'smtp_pass' => 'your_hello@dezyonstudio.com_password',
 *
 * Hostinger webmail (hello@dezyonstudio.com):
 * - SMTP host: smtp.hostinger.com (or smtp.titan.email for Titan mailboxes)
 * - SMTP port: 465 (ssl) or 587 (tls)
 * - SMTP user: full email address (hello@dezyonstudio.com)
 * - SMTP pass: webmail/email account password (set SMTP_PASSWORD in .env)
 * - Titan webmail: Settings > Enable Titan on other apps (required for SMTP scripts)
 * - After updating .env run: npm run build, then upload out/api/config.php
 * - Test on server: https://dezyonstudio.com/api/mail-check.php
 */
return [
    'db_host' => 'localhost',
    'db_user' => 'u527758351_dezyonstudio',
    'db_pass' => 'your_password_here',
    'db_name' => 'u527758351_dezyonstudio',
    'recipient_email' => 'hello@dezyonstudio.com, staha086@gmail.com, sc.rma.786@gmail.com, allahfinal@hotmail.com',
    'recaptcha_secret' => 'your_recaptcha_secret_key',
    'mail_from' => 'hello@dezyonstudio.com',
    'mail_from_name' => 'Dezyon Studio',
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    'smtp_encryption' => 'ssl',
    'smtp_user' => 'hello@dezyonstudio.com',
    'smtp_pass' => 'your_email_password_here',
    'pagespeed_api_key' => 'your_google_pagespeed_api_key',
];
