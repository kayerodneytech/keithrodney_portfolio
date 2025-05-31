<?php
// Basic contact form processing
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate inputs
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        header('Location: contact.php?status=error&message=Please fill all fields');
        exit();
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: contact.php?status=error&message=Invalid email format');
        exit();
    }
    
    // Prepare email
    $to = 'keithphiri036@gmail.com';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $email_body = "You have received a new message from your portfolio website.\n\n".
                  "Name: $name\n".
                  "Email: $email\n\n".
                  "Subject: $subject\n\n".
                  "Message:\n$message";
    
    // Send email (in a real implementation, you might use a library like PHPMailer)
    $mail_sent = mail($to, $subject, $email_body, $headers);
    
    if ($mail_sent) {
        header('Location: contact.php?status=success');
    } else {
        header('Location: contact.php?status=error&message=Message could not be sent');
    }
    exit();
} else {
    header('Location: contact.php');
    exit();
}
?>