<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['type'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$type = strip_tags(htmlspecialchars($_POST['type']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   

$to = 'rsathishkumar4@gmail.com'; 
$email_subject = "SSH PROPERTIES - QUERY FROM $type - $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\n\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nType: $type\n\nMessage:\n$message";
$headers = "From: enquiry@sshproperties.com\n"; 

$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);

mail($email_address, "SSH PROPERTIES ACKNOWLEDGEMENT" , "Thanks for your intrest in SSH PROPERTIES ! \n\n We will respond to you shortly.", $headers);

return true;         
?>
