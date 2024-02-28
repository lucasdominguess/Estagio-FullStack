<?php 
namespace app;

// abstract class Upload{ 

//     private $file;
//     // protected $newName;

//     public function __construct($file)
//     {
//         $this->file=$file; 
//     }
//     protected function extension(){ //pegando extensao do arquivo
//         return pathinfo($this->file,PATHINFO_EXTENSION);
//     }
//     protected function rename(){ 
//         $uniqId = uniqid(true); //cria um id unico
//         return $uniqId.".".$this->extension(); 
//         // return "{$uniqId}.{$this->extension()}";
//         }
// }

abstract class Upload { 

    public function __construct(protected $file) 
    {
    
    }
    protected function extension(){ 
        // pegando extensao do arquivo
        echo ">>>" .( pathinfo($this->file,PATHINFO_EXTENSION));
    }
    protected function rename(){ 
        $uniqId = uniqid(true); //cria um id unico
        return $uniqId.".".$this->extension(); 
    }


}