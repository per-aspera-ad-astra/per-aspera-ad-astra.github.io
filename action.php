<?php
$to = 'alex.vasilenko13@gmail.com';

if ( isset( $_POST['sendMail'] ) ) {
  $name	= substr( $_POST['name'], 0, 64 );
  $email = substr( $_POST['email'], 0, 64 );
	$message = substr( $_POST['message'], 0, 250 );

  $body = "Имя:\r\n".$name."\r\n\r\n";
  $body .= "E-mail:\r\n".$email."\r\n\r\n";
  $body .= "Сообщение:\r\n".$message."\r\n\r\n";

  send_mail($to, $body, $email);
}

function send_mail($to, $body, $email)
{
  $subject = 'Сообщение с сайта alexvabe.bget.ru';
  $boundary = "--".md5(uniqid(time()));
  $headers = "From: ".$email."\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
  $multipart = "--".$boundary."\r\n";
  $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
  $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

  $body = $body."\r\n\r\n";

  $multipart .= $body;

  mail($to, $subject, $multipart, $headers);
}

$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
header("Location: $redirect");
exit();
?>
