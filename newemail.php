<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
echo "Really ";

$name 		= $_POST['fullname'];
$phone 		= $_POST['phoneno'];
$visitor_email 	= $_POST['email'];
$message 	= $_POST['comments'];
$bestTimeToCall = $_POST['timetocall'];
$address = $_POST['address'];
$city = $_POST['city'];
$postcode =$_POST['postCode'];
$country =$_POST['country'];
$arrivaldate = $_POST['arrivalDate'];
$nights = $_POST['noofnights'];
$numberofadults = $_POST['numberofadults'];
$children = $_POST['numberofchildrens'];

//Validate first
if(empty($name)||empty($visitor_email))
{
    echo "Name and email are mandatory!"+$name+" -- name";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'the.nutan@gmail.com';
$email_subject = "ISRO :-- http://www.isac.gov.in/CentralBE-2017/advt.jsp";
$email_body = "Y".

$recipients = array(
  "the.nutan@gmail.com",
    "garlanutan@gmail.com"
  // more emails
);

echo $recipients;

$email_to = implode(',', $recipients); // your email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($email_to,$email_subject,$email_body,$headers);
//header('Location: email-sent.html');



// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>