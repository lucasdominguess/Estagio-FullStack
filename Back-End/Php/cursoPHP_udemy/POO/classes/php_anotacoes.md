dica : nome de variavel 1 *camelCase* 2 *snake_case* 
:: Operador de resoluçao de escopo ... para acessar metodos estaticos de uma classe sem precisar estancia-la 

variaveis = propriedades , funçoes = metodos

*include* : incluir outro arquivo php podendo selecionar uma variavel desse arquivo (em caso de erro o codigo continua)
*required*: da mesma forma que include , porem em caso de erro ele interrompe a execução do script

*include_once*: e para ter certeza que o modolo esta sendo incluido apenas uma vez .
*required_once* : incluir e tbm em caso de erro exibir esse erro apenas uma vez 

*gettype* : pegar o tipo de dado , retornando string /number 

*&$variavel* : & e usado para setar variavel com o mesmo valor na memoria , em caso de alteraçao toda serao alteradas 
. usado para concatenar strings e variaveis 
.= pode ser usado para atribuir o mesmo valor de variavel e concatenar com um outro valor 
+= soma do valor da variavel + a nova variavel 
--$var , setando um pre decremento isso vai diminuir o valor em -1 na hr q a variavel for chamada 
$var++ , vai setar valor para +1 na proxima vez que a variavel for chamada .
*var_dump()* : saber qual a tipagem de dados possue a variavel 

variavel de escopo global 
Uma variável declarada fora de uma função possui ESCOPO GLOBAL e só pode ser acessada fora de uma função:
variavel de escopo local : 
Uma variável declarada dentro de uma função possui um ESCOPO LOCAL e só pode ser acessada dentro dessa função:

use a global palavra-chave antes das variáveis ​​(dentro da função): 
assim vc tera acesso aquela variavel em outras partes do codigo

*static* antes da variavel para q possamos usar a variavel depois da conclusao de uma funçao (sem isso variavel se perde na conclusao da funçao)

*self::* -- para referenciar(usar) uma constante/metodo da propria classe . nota! ela referencia a constante de escolpo local normalmente ultilizado em metodos staticos 

parent:: --para referenciar(usar) uma const/metodos da classe pai (herdeira)

*static::* referencia a metodos da classe de instancia (a variavel) caso nao exista o metodo , ele ira referenciar o metodo da classe pai 

clone "nome_objeto" : clona objeto e seus valores . 

*getMessage()* : mostra a mensagem de erro personalizada.
*getCode()* :	mostra codigo 
*getLine()*: mostra linha do erro
*getFile()* : mostra caminho do arquivo

*traits* funciona em casos que queria herdar mais de uma classe . (classes de multiplas heran ças)
    usar  use app\caminho_traits\ fora do escopo de classes e dentro usar 
    use nome_da_classe_traits; 
    para chamar metodos e atributos de uma traits usar $this->nome_atributo
    atalho para criar namespace da classe *crtl+alt+g*

*metodos magicos* 
*__set,__get,__call,__toString* 
quando vc atribui um valor a um atributo q nao existe , ele invoca o metodo set e seta essa valor . 
quando vc chama um atributo sem passar valor ele chama o metodo get . 

declare(strict_types=1);

*Codigos Composer*
composer du -o