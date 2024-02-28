<?php 

namespace app;

abstract class Pessoa {
//     protected $nome;
//     protected $cpf;
//     protected $idade;
    public function __construct(protected string $nome ,protected string $cpf ,protected int $idade)
    {   
        // $this->nome = $nome;
        // $this->cpf =$cpf;
        // $this->idade= $idade;
        $this->ValidarDados();
    }
    private function ValidarDados(){
          $len_cpf= strlen($this->cpf);
          
        if ($len_cpf !== 11 or !preg_match("/^[a-z\s?]{5,}$/im",$this->nome)) {
            throw new \Exception("Cpf invalido");
        }

        // $this->nome. "\n" .$this->cpf. "\n" .$this->idade;
        
    }
}

