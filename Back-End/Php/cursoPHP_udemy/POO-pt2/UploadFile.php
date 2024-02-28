<?php 
namespace app;

class UploadFile extends Upload { 
    // public $file;
    // public $newName;
    public $extensions =['zip','rar','pdf'];

    public function __construct($file){
        parent::__construct($file);
      
    }


    public function upload(){ 
        return "Gerou o arquivo : ".$this->rename();
        // return "gerou arquivo 2 : {$this->newName}";
    }
}

