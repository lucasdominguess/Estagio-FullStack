<?php 

class Login_get_set{ 
    private $email; 
    private $senha; 
    private $nome;
    
    public function __construct($email,$senha,$nome)

    {
        $this->nome = $nome; 
        $this->setEmail($email);
        $this->setSenha($senha);
    }
    public function getNome(){ 
        return $this->nome; 
    }

    public function getEmail(){
        return $this->email; 
    }
    public function setEmail($e){ 
        // $newEmail = filter_var($e,FILTER_SANITIZE_EMAIL);
        // echo "<br> >>>>>> $newEmail";
        $this->email = $e;
    }

    public function getSenha(){
        return $this->senha;
    }
    public function setSenha($s){
        $this->senha=$s;
    }



    public function Logar(){
        if($this->email == "teste3@teste.com" and $this->senha == "1234"):
            echo "flavio logado teste 2 executado <br> " ;
        else:
            echo "Dados Invalidos <br>"; 
        endif;
    }
}

$flavio = new Login_get_set("teste@teste.com",'1234','flavio');
$flavio->Logar();
echo $flavio->getEmail();
echo $flavio->getSenha();
echo $flavio->getNome();
// echo $flavio->$nome;