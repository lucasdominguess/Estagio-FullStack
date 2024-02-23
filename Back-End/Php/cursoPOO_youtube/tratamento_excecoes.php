<?php 

class Newsletter { 
    public function cadastrarEmail($email){ 

        if(!filter_var($email,FILTER_VALIDATE_EMAIL)):
            throw new Exception("Este o",1); 
        else: 
            echo "email cadastrado com sucesso ";
        endif; 

    }
}

$cad = new Newsletter(); 
try { 
    $cad->cadastrarEmail("contato@email.com");
 }catch(Exception $e){
    echo "Mensagem:".$e->getMessage() ."<br>"; 
    echo "Codigo:".$e->getCode() ."<br>"; 
    echo "Linha:".$e->getLine() ."<br>"; 
    echo "Arquivo:".$e->getFile() ."<br>"; 

 }
