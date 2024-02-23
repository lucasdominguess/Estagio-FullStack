<?php
// aplicar namespace nas pastas para evitar conflito 
// basta adcionar no topo do arquivo namespace classes ; classes = 'nome qualquer';
// ou usar assim :  use models\produto as productModel ;

require "classes/ex_produto.php"; 
require "models/ex_produto.php";

$produto = new \classes\Produto();  #chamando arquivo com \nomespace\arquivo
$produto->mostrarDetalhes();

$produto2 =new \models\Produto();
$produto2->mostrarDetalhes(); 