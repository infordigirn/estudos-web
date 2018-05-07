<?php
session_start();
require_once 'config.php';
require_once 'crud.php';
require_once 'objetoBanco.php';

if(empty($_SESSION['prestador'])){
    header("Location: login2.php");
    exit;
}

$id = $_SESSION['prestador'];

$sql = $conexao->prepare("SELECT * FROM usuarios WHERE id = :id");
$sql->bindValue(":id",$id);
$sql->execute();

if($sql->rowCount() > 0){
    $sql = $sql->fetch();
    $nome = $sql['nome'];
    $profissao = $sql['profissao'];
    $bio = $sql['bio'];
}

?>