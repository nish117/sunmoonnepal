<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Honeypot — real users never see or fill this field; pretend success for bots
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
    exit;
}

// Sanitize inputs (strip CR/LF and other control chars from single-line fields)
$singleLine = fn($v) => trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', strip_tags((string) $v)));
$name    = $singleLine($_POST['name']  ?? '');
$email   = $singleLine($_POST['email'] ?? '');
$phone   = $singleLine($_POST['phone'] ?? '');
$message = trim(strip_tags((string) ($_POST['message'] ?? '')));

// Enforce length limits
if (mb_strlen($name) > 100 || mb_strlen($email) > 254 || mb_strlen($phone) > 30 || mb_strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'One or more fields are too long.']);
    exit;
}

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Name, email, and message are required.']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// Load SMTP settings (Gmail account + app password) — see mail_config.example.php
$configFile = __DIR__ . '/mail_config.php';
if (!is_file($configFile)) {
    error_log('send_mail.php: missing php/mail_config.php');
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
    exit;
}
$config = require $configFile;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

$body  = "You received a new message from the website contact form.\n\n";
$body .= "Name:    {$name}\n";
$body .= "Email:   {$email}\n";
$body .= "Phone:   " . ($phone ?: 'Not provided') . "\n\n";
$body .= "Message:\n{$message}\n";

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->Port       = $config['smtp_port'];
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->CharSet    = PHPMailer::CHARSET_UTF8;

    // Gmail only sends as the authenticated account; the visitor goes in Reply-To.
    // PHPMailer validates addresses and encodes headers, so input can't inject headers.
    $mail->setFrom($config['smtp_user'], $config['from_name']);
    foreach ((array) $config['to'] as $recipient) {
        $mail->addAddress($recipient);
    }
    foreach ((array) ($config['cc'] ?? []) as $recipient) {
        $mail->addCC($recipient);
    }
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'New Contact Form Submission from ' . $name;
    $mail->Body    = $body;

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} catch (Exception $e) {
    error_log('send_mail.php: ' . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
