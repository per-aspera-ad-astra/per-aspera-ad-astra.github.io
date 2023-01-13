<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["phone"]);
$date = htmlspecialchars($_POST["date"]);
$time = htmlspecialchars($_POST["time"]);

/* Устанавливаем e-mail адресата */
$myemail = "vsenakordon@gmail.com";

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! Вашей контактной формой было отправлено сообщение";

/* Отправляем сообщение, используя mail() функцию */
$from  = "Имя отправителя: $name  \r\n
Телефон: $tel \r\n
Дата: $date \r\n
Время: $time \r\n
			"; 
mail($myemail, $message_to_myemail, $from);
/*Редирект*/
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
header("Location: $redirect");
exit();
?>

<p>Ваше сообщение было успешно отправлено!</p>
<p>На <a href="index.html">Главную >>></a></p>


<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>Пожалуйста исправьте следующую ошибку:</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>