<?php 
namespace app;



use app\Pessoa;
class Estagiario extends Pessoa{ 
    public function __construct(string $nome ,string $cpf ,int $idade)
       {
           parent::__construct($nome,$cpf,$idade); 
       }
   }
   
//    try {
//        $pessoa1 = new Estagiario ('lucas','1234567890',25);
//         var_dump($pessoa1);
//    }catch (\Throwable $th){ 
//        echo $th->getMessage();
//    }
   
//    $pessoa1 = new Estagiario ('lucas','12345678910',25);
//    // echo $pessoa1->dados();
//    var_dump($pessoa1);
//    echo $pessoa1->$nome;