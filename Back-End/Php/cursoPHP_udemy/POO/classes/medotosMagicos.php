<?php 

// require "vendor/autoload.php" ; 
//__set,__get,__call,__toString 

class ShoppingCart { 
    private $get=[]; 
    private $products=[];

    // public  function __set($name ,$value) { 
    //     $this->get[$name][] = $value; 

    // }
    // public function __get($name){
    //     var_dump($this->get[$name]);
    // }
    public function __call($name, $arguments)
    {
        $this->products[]=$arguments;
    }
    public function products(){ 
        return $this->products;
    }
}

$shoppingCart = new ShoppingCart; 
// $shoppingCart->product = 'monitor'; 
// $shoppingCart->product = 'placa'; 
// $shoppingCart->product;
$shoppingCart->add('monitor');
$shoppingCart->add('teclado');
print_r( $shoppingCart->products());

