<?php

$id = 0;
if(isset($_GET['id']) && !empty($_GET['id'])){
    $id = addslashes($_GET['id']);
}

if(isset($_POST['nome']) && !empty('nome')){
    
    $banco->update("usuarios", 
                array("nome" => $_POST['nome'],
                      "email"=> $_POST['email'],
                      "profissao" => $_POST['profissao'],
                      "nivel" => $_POST['nivel']),
                array("id" => $id )
                 
            );

    header("Location: adm.php");        
}

$banco->query("SELECT * FROM usuarios WHERE id = $id");
if($banco->result() > 0){
    $dado = $banco->result();
    $dado = $dado[0];
}else{
    header("Location: adm.php"); 
}

?>