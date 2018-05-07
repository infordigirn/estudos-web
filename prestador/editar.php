<?php
    session_start();
    require_once 'crud.php';
    require_once 'objetoBanco.php';
    require_once 'admEditar.php';
?>

<html>
    <head>
        <meta charset="UTF-8"/>
        <title>Atualizar</title>
        <link rel="stylesheet" href="public/bootstrap/css/bootstrap.min.css"/>
    </head>
    <body>
        <form method="POST">
        <div class="form-group">
            <label for="textNome" class="control-label">Nome</label>
            <input  name="nome" class="form-control" value="<?php echo $dado['nome']; ?>" type="text">
        </div>

        <div class="form-group">
                <label for="inputEmail" class="control-label">Email</label>
                <input name="email" class="form-control" value="<?php echo $dado['email']; ?>" type="email">
        </div>
        <div class="form-group">
            <label for="textProfissao">Profissão</label>
            <input type="text" name="profissao" class="form-control" value"<?= $dado['profissao'];?>" />
        </div>
         <div class="form-group">
            <label for="textNivel" class="control-label">Nivel</label>
            <input name="nivel" class="form-control" value="<?php echo $dado['nivel']; ?>" type="text">
        </div>
        <button type="submit" class="btn btn-success">Atualizar</button>
        </form>
    </body>
</html>