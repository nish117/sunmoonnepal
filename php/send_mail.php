<?php
header('Content-Type: application/json; charset=utf-8');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Sanitize inputs
$name    = trim(strip_tags($_POST['name']    ?? ''));
$email   = trim(strip_tags($_POST['email']   ?? ''));
$phone   = trim(strip_tags($_POST['phone']   ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

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

// Destination email — update this to your real address
$to      = 'sunmoonnepal4j@gmail.com';
$subject = 'New Contact Form Submission from ' . $name;

$body  = "You received a new message from the website contact form.\n\n";
$body .= "Name:    {$name}\n";
$body .= "Email:   {$email}\n";
$body .= "Phone:   " . ($phone ?: 'Not provided') . "\n\n";
$body .= "Message:\n{$message}\n";

// Build headers safely (prevent header injection)
$safeEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
$headers   = implode("\r\n", [
    "From: {$name} <{$safeEmail}>",
    "Reply-To: {$safeEmail}",
    "Bcc: bajra.nish@gmail.com",
    "X-Mailer: PHP/" . phpversion(),
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
]);

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
