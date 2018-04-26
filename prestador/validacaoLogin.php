<?php
//VALIDAÇÃO LOGIN 
session_start();
require 'config.php';
if(isset($_POST['email']) && !empty($_POST['email'])){
    $email = addslashes($_POST['email']);
    $senha = md5(addslashes($_POST['password']));
    
    $sql = $conexao->prepare("SELECT * FROM usuarios WHERE email = :email AND senha = :senha");
    $sql->bindValue(":email",$email);
    $sql->bindValue(":senha",$senha);
    $sql->execute();

    if($sql->rowCount() > 0){
        $sql = $sql->fetch();
        $_SESSION['prestador'] = $sql['id'];
        //SE ID NÃO FOR DO ADM ELE SERÁ COLOCADO NA PÁGINA DE USUÁRIO
        if($sql['id'] == 5){
            header("Location: adm.php");
            exit;
        }else{
            header("Location: paginaPrincipal.php");
        } 
    }else{
        echo "Email ou Senha Inválida!";        
    }
}

?>