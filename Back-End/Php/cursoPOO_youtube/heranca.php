<?php

class Veiculo {
   
        public $modelo;
        public $cor;
        public $ano;
    
        public function Andar(){
            echo 'Andou';
        }
        public function Parar(){
            echo "parou";
        }

}


class Carro extends Veiculo{ 
   public function ligarLimpador() { 
    echo 'limpandoo 321...'; 
   }
}
class Moto extends Veiculo{ 
   public function darGrau() { 
    echo 'dando grau em 321 ... '; 
   }
}

$corsa = new Carro();
$corsa->modelo ='Corsa'; 
$corsa->cor='vermelho';
$corsa->ano=2002;
$corsa->Andar();
var_dump($corsa);
echo '<br>'; 
$corsa->ligarLimpador();


