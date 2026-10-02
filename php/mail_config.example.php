<?php
// Copy this file to mail_config.php and fill in real values.
// mail_config.php is git-ignored — never commit the app password.
//
// smtp_pass is a Gmail *App Password*, not the normal account password:
//   1. Turn on 2-Step Verification for the Gmail account
//   2. Go to https://myaccount.google.com/apppasswords
//   3. Create an app password and paste the 16 characters below (spaces optional)
return [
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_user' => 'your-account@gmail.com',   // mailbox that sends the mail (Gmail or hosting account)
    'smtp_pass' => 'xxxx xxxx xxxx xxxx',      // app password (Gmail) or mailbox password (hosting)
    'from_name' => 'Sun Moon Nepal Website',
    'to'        => ['infosunmooneparu@gmail.com'],  // where contact form messages are delivered
    'cc'        => ['bajra.nish@gmail.com'],        // copied on every message (optional)
];
