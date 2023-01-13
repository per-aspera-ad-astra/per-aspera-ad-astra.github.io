<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных
скриптов */
$name = htmlspecialchars($_POST["fullname"]);
$phone = htmlspecialchars($_POST["phone"]);
$street = htmlspecialchars($_POST["street"]);
$date = htmlspecialchars($_POST["date"]);
$house = htmlspecialchars($_POST["building"]);
$corpus = htmlspecialchars($_POST["corpus"]);
$appartment = htmlspecialchars($_POST["appartment"]);
$cold = htmlspecialchars($_POST["cold"]);
$hot = htmlspecialchars($_POST["hot"]);
$pay = htmlspecialchars($_POST["pay"]);

/* Устанавливаем e-mail адресата */
$myemail = "your email";

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Вам была отправлена заявка на проверку счетчика";

/* Отправляем сообщение, используя mail() функцию */
$from  = "Имя отправителя: $name  \r\n
Контактный телефон: $phone \r\n
Улица: $street \r\n
Дом: $house \r\n
Корпус: $corpus \r\n
Квартира: $appartment \r\n
Дата: $date \r\n
Холодная: $cold \r\n
Горячая: $hot \r\n
Способ оплаты: $pay \r\n";


mail($myemail, $message_to_myemail, $from);
/*Редирект*/
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
header("Location: $redirect");
exit();
?>
