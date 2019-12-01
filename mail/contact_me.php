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
$type2 = strtoupper($type);
$name2 = strtoupper($name);

$to = $email_address; 
$email_subject = "SSH PROPERTIES - CUSTOMER INQUIRY - ON $type2 - $name2";
$email_body = "\n\nHi There,\n\n\nYou have received a new message from sshproperties.com inquiry form.\n\n"."Here are the details:\n\n\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nType: $type\n\nMessage:\n\n----------------------------------------------------\n\n$message\n\n----------------------------------------------------\n\n\n\n-\n\nSSH PROPERTIES";
$headers = "From: enquiry@sshproperties.com\n"; 

$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);

mail($email_address, "SSH PROPERTIES - ONLINE INQUIRY ACKNOWLEDGEMENT" , "\n\n\nHi $name,\n\n Thanks for your intrest in SSH PROPERTIES ! \n\n We will respond to you shortly.\n\n\n\n-\n\nSSH PROPERTIES", $headers);

return true;         
?>
