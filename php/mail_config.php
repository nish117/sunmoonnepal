<?php
// Copy this file to mail_config.php and fill in real values.
// mail_config.php is git-ignored — never commit the app password.
//
// smtp_pass is a Gmail *App Password*, not the normal account password:
//   1. Turn on 2-Step Verification for the Gmail account
//   2. Go to https://myaccount.google.com/apppasswords
//   3. Create an app password and paste the 16 characters below (spaces optional)
return [
    'smtp_host' => 'mail.jeiws.com',
    'smtp_port' => 587,
    'smtp_user' => 'info@jeiws.com',   // hosting mailbox that sends the mail
    'smtp_pass' => '1234567890jeiws2022',      // Gmail app password
    'from_name' => 'SunmoonNepal Website',
    'to'        => ['infosunmooneparu@gmail.com'],  // where contact form messages are delivered
    // 'cc'        => ['bajra.nish@gmail.com'],        // copied on every message (optional)
];
