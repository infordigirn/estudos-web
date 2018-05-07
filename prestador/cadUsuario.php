<?php 
require 'crud.php';
require_once 'objetoBanco.php';

$banco->insert("usuarios", array("nome" => $_POST['usuario'],
                                 "email" => $_POST['email'],
                                 "senha" => md5($_POST['password'])));
 header("Location: index.html");
?>