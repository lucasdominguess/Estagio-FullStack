<?php 
namespace app\classes;

abstract class Upload{ 

    private $file;
    // protected $newName;

    public function __construct($file)
    {
        $this->file=$file; 
    }
    protected function extension(){ //pegando extensao do arquivo
        return pathinfo($this->file,PATHINFO_EXTENSION);
    }
    protected function rename(){ 
        $uniqId = uniqid(true); //cria um id unico
        return $uniqId.".".$this->extension(); 
        // return "{$uniqId}.{$this->extension()}";
        }
}