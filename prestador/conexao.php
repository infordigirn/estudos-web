<?php

if ($_SERVER['HTTP_HOST'] == 'localhost') {
	$host = "localhost";
	$usuario = "root";
	$senha = "";
	$bd = "talentos";
}else{

	$host = "localhost";
	$usuario = "id3319122_talentos";
	$senha = "123456";
	$bd = "id3319122_talentos";


} 

$mysqli = new mysqli($host, $usuario, $senha, $bd);

if($mysqli->connect_errno)
     
    echo "Falha na conexão:(".$mysqli->connect_errno.") ".$mysqli->connect_errno;

?>

