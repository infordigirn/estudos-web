<?php 

require_once 'userPrestador.php';
if(!isset($_GET['id']) && empty($_GET['id'])){
echo "Bem Vindo: <br/><Strong>Nome:</strong> ".$nome;
echo "<br/><strong>Profissão:</strong> ".$profissao;
echo "<br/> <strong>Bio:</strong> ".$bio;
}else{

$id = 0;
if(isset($_GET['id']) && !empty($_GET['id'])){
    $id = addslashes($_GET['id']);
}

$banco->query("SELECT * FROM usuarios WHERE id = $id");
if($banco->result() > 0){
    $dado = $banco->result();
    $dado = $dado[0];
}else{
    header("Location: adm.php"); 
}

echo "Bem Vindo: <br/><Strong>Nome:</strong> ".$dado['nome'];
echo "<br/><strong>Profissão:</strong> ".$dado['profissao'];
echo "<br/> <strong>Bio:</strong> ".$dado['bio'];
}
?>
<html>
    <head>
        <title>Pagina Principal</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
<?php if(!isset($_GET['id']) && empty($_GET['id'])):?>
<div>
   <span>Complete seu perfil - </span> <a href="editarPrestador.php">Editar</a>
</div>
<div>
    <a href="logout.php" id="logout">Sair</a>
</div>
<?php endif ?>
   
