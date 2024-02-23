<?php
/*
public - nenhuma ocultação, propriedade ou metodo ficara acessivel para todos . 
(acessivel dentro do escopo e tbm fora )

protected - todos os herdeiros veem a propriedade e metodos 
(só acessa o atributo dentro da classe com get e set )

private - acesso somente para a classe declarante . 
nao tem acesso fora da classe (nem mesmo por heireiros)

*/
class Veiculo {
   
    private $modelo;
    public $cor;
    public $ano;

    private function Andar(){
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
echo '<br>'; 
var_dump($corsa);