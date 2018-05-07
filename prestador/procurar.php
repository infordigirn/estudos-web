<?php
session_start();
require 'crud.php';
require 'config.php';
require 'objetoBanco.php';

if(empty($_SESSION['prestador'])){
    header("Location: index.php");
    exit;
}
$id = $_SESSION['prestador'];

$sql = $conexao->prepare("SELECT * FROM usuarios WHERE id = :id");
$sql->bindValue(":id",$id);
$sql->execute();

$banco->query("SELECT * FROM usuarios WHERE id <> 1");
?>

<html>
<head>
    <meta charset="UTF-8"/>
    <title></title>
    <link rel="stylesheet" href="public/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<h1>Lista de Prestadores</h1>
<hr/>
<?php
  $fechaNegocio = $conexao->prepare("SELECT * FROM fecha_negocio WHERE (id_de=? AND id_para=?)");
?>
<?php if($banco->result() > 0):?>
  <?php foreach($banco->result() as $prestadores):?>
 
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object img-prestador" src="prestador.png" heigth="50" width="50" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class='media-heading'><?=$prestadores['nome'];?></h4>
    <?='<a href="paginaPrincipal.php?id='.$prestadores['id'].'">Visitar Perfil</a>';?>
    <p><?=$prestadores['profissao']?></p>
    <p><?=$prestadores['bio'] ?></p>
  </div> 
  
</div>
<?php 
    $fechaNegocio->execute(array($id,$prestadores['id']));

    if($fechaNegocio->rowCount() == 0){
      echo "<a><button type='submit' class='btn btn-default'>Convidar</button></a>";
    }else{
      $status = $fechaNegocio->fetch();
      if($status['status'] == 0){
        echo '<a href="#">Cancelar Negociação</a>';
      }else{
        echo '<a href="#">Remover</a>';
      }
    }
  ?>
  
<hr/>
<?php endforeach ?>
<?php endif ?>
</body>
</html>