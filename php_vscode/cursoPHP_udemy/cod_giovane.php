<?php
declare(strict_types=1);
//abistração ,encapsulamento , herança ,polimorfismo
abstract class Pessoa { 
//    private string $nome ; 
   function __construct(public readonly string $nome)   
   {
    $this->setNome();
   }
   private function setNome()
   {
    if ($this->nome == 'lucas'){
        throw new Exception("lucas nao pode");
    }
   }
//    public function get_nome()
//    { 
//     return $this->nome;

//    }
}

class Estagiario extends Pessoa{
    function __construct(string $nome)
    {
    parent::__construct($nome);
    }

}


try {
    $pessoa = new Estagiario('rafael');
    echo "vem do try ".$pessoa->nome;
} catch (\Throwable $th) {
    echo $th->getMessage();
}exit()

// $pessoa->nome='lucas';
 


 

?>



