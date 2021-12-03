<?php
    $fio = $_POST['fio'];
	$phone = $_POST['phone'];
    $singleSelectWho = $_POST['singleSelectWho'];
    $singleSelect = $_POST['singleSelect'];

	$to = "sme@ukrgasbank.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    ФИО: $fio /n
    Телефон: $phone /n
    Я -: $singleSelectWho /n
    Регион: $singleSelect"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Відправленно </p>
