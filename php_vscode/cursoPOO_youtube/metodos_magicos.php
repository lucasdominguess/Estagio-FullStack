<?php 
//clone
//construct
//invoke
//tostring
//get
//set

class Pessoa { 
    public $nome; 
    public function __set($nome,$valor) { 
        $this->nome=$valor;
    }
}

$pessoa =new Pessoa(0); 
$pessoa->nome = "Danilo";

echo $pessoa->nome; 

var_dump($pessoa);