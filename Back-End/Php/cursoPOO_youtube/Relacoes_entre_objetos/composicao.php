<!-- Criando instancia de uma classe x dentro de uma classe y  -->

<?php 

class Pessoa { 
    public function atribuiNome($nome) { 
        return "o nome da pessoa é ".$nome;
    }
}

class Exibe { 
    public $pessoa;
    public $nome; 

    function __construct($nome) { 
        $this->pessoa = new Pessoa(0); 
        $this->nome = $nome; 
    }
    public function exibeNome() { 
        echo $this->pessoa->atribuiNome($this->nome);
    }
}

$exibe = new Exibe("Lucas domingues"); 
$exibe->exibeNome();
