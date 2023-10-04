<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email = strip_tags(htmlspecialchars($_POST['email']));
    $subject = strip_tags(htmlspecialchars($_POST['subject']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    // Set your email address where you want to receive the form submissions.
    $to = "prajwolkarki609@gmail.com"; // Replace with your email address

    // Create email headers.
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Compose the email message.
    $email_message = "You have received a new message from your website contact form.\n\n";
    $email_message .= "Here are the details:\n\n";
    $email_message .= "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n";
    $email_message .= "Message:\n$message\n";

    // Attempt to send the email.
    if (mail($to, $subject, $email_message, $headers)) {
        http_response_code(200); // Success
        echo "Your message has been sent successfully.";
    } else {
        http_response_code(500); // Server error
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403); // Forbidden
    echo "There was a problem with your submission. Please try again.";
}
?>
