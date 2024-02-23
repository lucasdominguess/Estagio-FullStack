<?php 
// namespace POO\classes ; 
namespace app\classes;

use app\traits\ValidationFile;

class UploadFoto extends Upload { 
    
    use ValidationFile;

    public $extensions = ['png','jpg'];

    public function upload(){ 
        return $this->rename();
    }

}
