<?php
session_start();
require 'crud.php';
$banco = new Banco("localhost","prestador","root","32051217"); 
if(isset($_GET['id']) && !empty($_GET['id'])){
    $id = addslashes($_GET['id']);

    $banco->delete("usuarios", array("id" => $id));
    header("Location: adm.php");
}

?>