<?php
namespace App\classes;


class Crud
{

    public $field = 'field teste';
    public $table = 'users';

    public function read()
    {
        var_dump($this->field);
    }

    public function delete()
    {
        return 'deletando';
    }
}
                