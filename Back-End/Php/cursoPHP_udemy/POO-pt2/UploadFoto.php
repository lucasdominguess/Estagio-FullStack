<?php 
// namespace POO\classes ; 
namespace app;

// use app\traits\ValidationFile;

class UploadFoto extends Upload { 
    
    // use ValidationFile;
    public function __construct(protected $file) 
    {
    }    
    public $extensions = ['png','jpg'];

    public function upload(){ 
        return $this->rename();
    }

}
