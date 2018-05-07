<?php
session_start();
require 'crud.php';
require 'config.php';
require_once 'objetoBanco.php';
if(empty($_SESSION['prestador'])){
    header("Location: login2.php");
    exit;
}
$id = $_SESSION['prestador'];


$sql = $conexao->prepare("SELECT nome FROM cliente WHERE id = :id");
$sql->bindValue(":id",$id);
$sql->execute();

if($sql->rowCount() > 0){
    $sql = $sql->fetch();
    $nome = $sql['nome'];
}
echo "Bem Vindo ".$nome;
?>


<div>
    <a href="logout.php" id="logout">Sair</a>
</div>
<div>
    <a href="editarCliente.php">Editar</a>
</div>

<div>
<a href="procurar.php">Procurar Prestador</a>
</div>        