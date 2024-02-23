<?php

abstract class Banco { 
    protected $saldo;
    protected $limiteSaque;
    protected $juros;

    public function setSaldo($s) { 
        $this->saldo=$s;
    }
    public function getSaldo($s){ 
        return $this->saldo+$s; 
    }

    abstract protected function Sacar($s);
    abstract protected function Depositar($d);
}

class Itau extends Banco{
   
    public function Sacar($s) { 
        $data = date('h:m:s D,m,y,');
        $this->saldo -=$s; 
        echo "<hr> Saque realizado em: <br> $data <br> No valor de: R$".$s ;
    }
    public function Depositar($d){
        $data = date('h:m:s D,m,y,');
        $this->saldo += $d;
        echo "<hr> Deposito realizado em: <br> $data <br> No valor de: R$".$d;
        $this->getSaldo($d);
    }
}
$itau_01 = new Itau();
$itau_01->setSaldo(5000);
echo "<hr> Saldo Atual :R$".$itau_01->getSaldo(0) ."<hr>";
$itau_01->Sacar(250);
echo "<hr> Saldo Atual: R$".$itau_01->getSaldo(0) ."<hr>";
$itau_01->Depositar(1000);
echo "<hr> Saldo Atual: R$".$itau_01->getSaldo(0) ."<hr>";

