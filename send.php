<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer-master/language/phpmailer.lang-ru.php');
$mail->IsHTML(true);

$mail->setFrom('miaclab@yandex.ru', 'Заявка');
$mail->addAddress('miaclab@yandex.ru');
$mail->Subject = "Заявитель";
$body = '<h1>Заявка</h1>';
if(trim(!empty($_POST['name1']))){
    $body.='<p><strong>Имя заявителя:&#32</strong>'.$_POST['name1'].'</p>';
}
if(trim(!empty($_POST['number-cb']))){
    $body.='<p><strong>Заявитель выбрал способ обратной связи: телефон.</strong></p>';
}
if(trim(!empty($_POST['number1']))){
    $body.='<p><strong>Телефонный номер заявителя:&#32</strong>'.$_POST['number1'].'</p>';
}
if(trim(!empty($_POST['email-cb']))){
    $body.='<p><strong>Заявитель выбрал способ обратной связи: почта.</strong></p>';
}
if(trim(!empty($_POST['email1']))){
    $body.='<p><strong>Адрес электронной почты заявителя:&#32</strong>'.$_POST['email1'].'</p>';
}
if(trim(!empty($_POST['message1']))){
    $body.='<p><strong>Сообщение заявителя:&#32</strong>'.$_POST['message1'].'</p>';
}
$mail->Body=$body;
if (!$mail->send()) {
    $messagge='Ошибка';
}
else {
    $message='Данные отправлены';
}
$responce = ['message' => $message];
header('Content-type:application/json');
echo json_encode($responce);
?>