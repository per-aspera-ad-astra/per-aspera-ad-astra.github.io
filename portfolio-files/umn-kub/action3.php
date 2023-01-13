<?php
header('Content-Type: text/html; charset=utf-8');
mb_internal_encoding("UTF-8");
/* Осуществляем проверку вводимых данных и их защиту от враждебных
скриптов */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);

/* Устанавливаем e-mail адресата */
$myemail = "info@umnokub.ru";

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = '=?utf-8?B?'.base64_encode('Заказ сайта c настройкой рекламной кампанни в яндекс-директ').'?=';

/* Отправляем сообщение, используя mail() функцию */
$mes  = "Имя отправителя: $name  \r\n
Контактный телефон: $tel \r\n
E-mail: $email \r\n";

$from = "Content-type: text/html; charset=UTF-8\r\n";
$from .= "Reply-To: $email \r\n";

mail($myemail, $message_to_myemail, $mes, $from);
/*Редирект*/
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
header("Location: $redirect");
exit();
?>
