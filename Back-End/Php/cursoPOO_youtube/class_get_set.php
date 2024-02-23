<?php 

// class Pessoas{ 

//     public $idade; //atributos 
//     public $nome; 
//     public $email; 

//     public function dados(){ //Metodos 
//         echo "meu nome é {$this->nome} e meu email é {$this->email} <br>" ;
//     }
// }
// $lucas = new Pessoas(); 
// $lucas->nome = "Lucas Domingues";
// $lucas->idade =35;
// $lucas->email ='lucas@gmail.com';
// $lucas->dados();



// class Login{ 
//     public $email; 
//     public $senha; 

//     public function Logar(){
//         if($this->email == "teste@teste.com" and $this->senha == "123"):
//             echo "logado" ;
//         else:
//             echo "Dados Invalidos"; 
//         endif;
//     }
// }

// $login1 = new Login(); 
// $login1->email="testse@teste.com";
// $login1->senha="123";
// $login1->Logar();

// Exemplo de classe com get e setter ////////////////////////////////////////////

class Login_get_set{ 
    private $email; 
    private $senha; 
    
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
            echo "logado teste 2 executado <br> " ;
        else:
            echo "Dados Invalidos <br>"; 
        endif;
    }
}
//composer

// $login2 = new Login_get_set() ; 
// $login2->setEmail('teste3@teste.com');
// $login2->setSenha('1234');
// $login2->Logar();
// echo $login2->getEmail();
// echo $login2->getSenha();