<?php 
namespace app;

class Template { 

    const PATH ='app/views'; 

    public function load()
    {
        return self::PATH;
    }
}

echo (new Template)->load();

echo "<br>".Template::PATH;
