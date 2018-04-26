<?php

if(!function_exists("protect")){
	function protect(){

		if(!isset($_SESSION))
			session_start();

		if(!isset($_SESSION['usuario']) || !is_numeric($_SESSION['usuario'])){
			
			header("Location:$_SERVER['REQUEST_SCHEME']?>://<?=$_SERVER['HTTP_HOST']?>/adotepet/logindois/logindois.php");
		}
	}
}

?>