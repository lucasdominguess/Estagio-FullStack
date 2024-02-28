<?php

namespace app;

class Person { 

   
   public function __construct(public string $name , public string $email)
   {
 
   }
   public function info()
   { 
      return "Meu nome é {$this->name} e meu email é {$this->email}";
   }
}
// Modelo antigo 
// class Person { 
//    public string $name; 
//    public string $email; 
   
//    public function __construct(string $name ,string $email)
//    {
//       $this->name = $name; 
//       $this->email= $email;
//    }
//    public function info()
//    { 
//       return "Meu nome é {$this->name} e meu email é {$this->email}";
//    }
// }