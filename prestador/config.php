
<?php
//CONEXÃO COM O BANCO DE DADOS 
try{
    $conexao = new PDO("mysql:dbname=prestador; host=localhost", "root", "32051217");    
}catch(PDOException $e){
    echo "Error: ".$e->getMessage();
}

?>