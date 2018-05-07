<?php 
require 'crud.php';
require_once 'objetoBanco.php';

$banco->insert("cliente", array("email" => $_POST['email'],
                                 "senha" => md5($_POST['senha'])));
                                 
header("Location: index.html");
?>