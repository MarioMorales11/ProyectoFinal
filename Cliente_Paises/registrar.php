<?php

$usuario = isset($_POST['txt_pais']) ? $_POST['txt_pais'] : '';
$usuario = isset($_POST['txt_irc']) ? $_POST['txt_irc'] : '';
$usuario = isset($_POST['txt_evento']) ? $_POST['txt_evento'] : '';
$usuario = isset($_POST['txt_year']) ? $_POST['txt_year'] : '';

try {

   $conexion = new PDO('mysql:host=fdb30.awardspace.net;port=3306;dbname=4215876_paises', '4215876_paises', 'Metalica-20');

   $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

   echo json_encode('Conectado correctamente');

} catch(PDOException $error) {
   echo $error->getMessage();
   die();
}
