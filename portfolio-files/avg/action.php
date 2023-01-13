<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных
скриптов */
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$agree = htmlspecialchars($_POST["agree"]);

/* Устанавливаем e-mail адресата */
$myemail = "your email";

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Вашей контактной формой было отправлено сообщение";

/* Отправляем сообщение, используя mail() функцию */
$from  = "Имя отправителя: $name  \r\n
Контактный телефон: $tel \r\n
Согласие на обработку персональных данных: $agree \r\n";

mail($myemail, $message_to_myemail, $from);
/*Редирект*/
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
header("Location: $redirect");
exit();
?>
