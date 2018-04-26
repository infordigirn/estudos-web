<!--PÁGINA ADIMINISTRATIVA-->
<?php
session_start();
require 'crud.php'; //CHAMADA A CLASSE CRUD
require 'config.php'; // CHAMA O ARQUIVO DE CONEXÃO

$banco = new Banco("localhost","prestador","root","32051217"); //CRIA OBJETO BANCO
//VERIFICA SE EXISTE SESSÃO
if(empty($_SESSION['prestador'])){
    header("Location: login2.php");
    exit;
}

$id = $_SESSION['prestador'];

$sql = $conexao->prepare("SELECT nome FROM usuarios WHERE id = :id");
$sql->bindValue(":id",$id);
$sql->execute();

if($sql->rowCount() > 0){
    $sql = $sql->fetch();
    $nome = $sql['nome'];
}
echo "Bem Vindo ".$nome;
?>


<html>
<head>
    <meta charset="UTF-8"/> 
    <title>Painel Administrativo</title>
    <link rel="stylesheet" href="public/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
    <div>
        <a href="logout.php" id="logout">Sair</a>
    </div>        
<table class="table table-striped">
<thead>
    <tr>      
      <th scope="col">Usuario</th>
      <th scope="col">Email</th>
      <th scope="col">Nível</th>
      <th scope="col">Ação</th>
    </tr>
  </thead>
  <tbody>
    <?php  
    $banco->query("SELECT * FROM usuarios"); 
    if($banco->result() > 0 ){
        
        foreach($banco->result() as $usuario){
            echo "<tr>";
                echo "<th scope='row'>".$usuario['nome']."</th>";
                echo "<td>".$usuario['email']."</td>";
                echo "<td>".$usuario['nivel']."</td>";
                echo '<td><a href="editar.php?id='.$usuario['id'].'"><button type="submit" class="btn btn-primary">Alterar</button></a> - <a href="excluir.php?id='.$usuario['id'].'"><button type="submit" class="btn btn-danger">Excluir</button></a></td>';
            echo "</tr>";
        }
    }else{

        echo "Não teve resultado";
    }        
    
    ?>    
  </tbody>
</table>  
</table>

</body>
</html>