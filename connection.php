<?php
//get data from form  
$email = $_POST['email'];
$contact= $_POST['contact'];
$message= $_POST['message'];
$to = "pranotighode.sknscoe.comp@mail.com";
$subject = "Mail From website";
$txt ="Email = ". $email . "\r\n  Contact = " . $contact . "\r\n Message =" . $message;
$headers = "From: noreply@pranotighode@gmail.com" ;
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

?>
