<?php
if(isset($_POST['submit'])){
    $to=$_POST['to'];
    $subject=$_POST['subject='];
    $message=$_POST['message'];
    $header ="From : solarsavy";

    if(mail($to, $subject, $message, $header)){
        echo "Email sent Successfully";
    }else{
        echo "Email Sending Failed";
    }   
}
?>