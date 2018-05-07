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

if(isset($_POST['email']) && !empty($_POST['email'])){ 


    $banco->update("usuarios", array("nome" => $_POST['nome'],
                                    "email" => $_POST['email'],
                                    "profissao" => $_POST['profissao'],
                                    "bio" => $_POST['bio']),
                                    
                                array("id" => $id)                                
                                );
    header("Location: paginaPrincipal.php");
}

$sql = $conexao->prepare("SELECT * FROM usuarios WHERE id = :id");
$sql->bindValue(":id",$id);
$sql->execute();

if($sql->rowCount() > 0){
    $sql = $sql->fetch();
    $nome = $sql['nome'];
    $email = $sql['email'];
    $profissao = $sql['profissao'];
    $bio = $sql['bio'];
}


?>

<html>
<header>
    <meta charset="UTF-8"/>
    <title>Editar Cliente</title>
    <link rel="stylesheet" href="public/bootstrap/css/bootstrap.min.css"/>
</header> 
<body>
    <form method="POST">
    <div class="form-group">
            <label for="textNome" class="control-label">Nome</label>
            <input  name="nome" class="form-control" value="<?php echo $nome; ?>" type="text">
        </div>

        <div class="form-group">
                <label for="inputEmail" class="control-label">Email</label>
                <input name="email" class="form-control" value="<?php echo $email; ?>" type="email">
        </div>

        <div class="form-group">
            <label for="inputProfissao" class="control-label">Profissão</label>
            <input type="text" class="form-control" name="profissao" value=<?=$profissao; ?> >
        </div>

        <div class="form-group">
            <label for="comment">Bio</label>
            <textarea name="bio" class="form-control" rows="5" id="comment" ><?=$bio;?></textarea>
        </div> 
        <button type="submit" class="btn btn-success">Salvar</button>
    </form>
</body>     
</html>