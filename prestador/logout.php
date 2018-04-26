<?php
//ENCERRA A SESSÃO
session_start();
if(!empty($_SESSION['prestador'])){
    session_destroy();
    header("Location: index.html");
}else{
    header("Location: index.html");
}

?>