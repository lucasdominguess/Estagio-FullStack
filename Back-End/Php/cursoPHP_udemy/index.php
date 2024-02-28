<?php 
// header('Content-type:application/json');

require "vendor/autoload.php";

// use app\UploadFile;
// use app\UploadFoto;
use app\Estagiario;

// class Estagiario extends Pessoa{ 
//     public function __construct(string $nome ,string $cpf ,int $idade)
//        {
//            parent::__construct($nome,$cpf,$idade); 
//        }
//    }
   
//    try {
//        $pessoa1 = new Estagiario ('lucas','1234567890',25);
//         var_dump($pessoa1);
//    }catch (\Throwable $th){ 
//        echo $th->getMessage();
//    }
   
$pessoa1 = new Estagiario ('lucas','12345678910',25);
   // echo $pessoa1->dados();
   var_dump($pessoa1);
//    echo $pessoa1->$nome;
// use app\Person;
// use app\Template;

// $lucas = new Person('lucaskkkkk','lucas@gmail.com') ;
// // echo $lucas->info();


// // $bd = new PDO("caminho","nome"); 

// class User 
// { 
//     public static string $name ; 
//     public static function userInfo()
//     {
//         return 'teste metodo estatico'; 


//     }
// }

// User::userInfo();   


 
// $foto = new UploadFoto('foto.pnd');
// echo $foto->upload();
// $file = new UploadFile('arq.raer');
// echo "<br>";
// echo $file->upload();
