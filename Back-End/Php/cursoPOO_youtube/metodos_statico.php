<?php

class login{ 
    public static $user ; 
    public static function verificaLogin() { 
        echo " O usuario " .self::$user ." esta logado";

    }
}
login::$user="admin";
Login::verificaLogin();