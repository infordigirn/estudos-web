<?php
session_start();

if(empty($_SESSION['prestador'])){
    header("Location: login2.php");
    exit;
}
echo "Página do cliente/prestador";
?>

