<?php
require "vendor/autoload.php";

use app\classes\Pessoa;
// use app\classes\Upload;
use app\classes\UploadFoto;
use app\classes\AtividadePessoa;
use app\classes\UploadFile;



// require "POO/classes/AtividadePessoa.php"; 
// require "POO/classes/UploadFoto.php";

$pessoa = new Pessoa();
$pessoa->idade=35;
// $pessoa->nome="lucas";
$pessoa->email="lucas@gmail.com";
// var_dump($pessoa);
echo $pessoa->dados();
echo "<br>";

// $pessoa = new Pessoa();
// $pessoa->idade=15;
// $pessoa->nome="rafael";
// $pessoa->email="rafael@gmail.com";

// echo $pessoa->dados();

$atividadePessoa = new AtividadePessoa; 
$atividadePessoa->pular();
// var_dump($atividadePessoa);
echo "<br>";


$uploadFoto = new UploadFoto('foto.png'); 
// $upload->file('foto.png');
// $upload->extension();
// $upload->rename();
$uploadFoto->validation();
echo $uploadFoto->upload();
echo "<br>";



$uploadfile = new UploadFile("arquivo.rar");
// $upload->file('foto.png');
// $uploadfile->extension();
// $uploadfile->rename();
echo $uploadfile->upload();

