// exemplos de variaveis 
nome = 'gustavo' 
var nome1 = 'lucas' 
let nome2 = 'thiago'  
const nome3 = 'guilherme'
console.log(nome)
console.log(nome1)

// exemplo de funcoes 
// função Comum
function testes(){
    console.log('Guilherme'); 

}
testes(); 

// arrow function  
const testes2 = () => { 
    console.log('Essa é uma Arrow Function !!!'); 
}
testes2();
console.clear(); 

//funcao invocando diretamente 
// (
//     function() { 
//         alert('ola'); 
//     }
// )();
console.clear(); 

// Classes  
            // Construtora 
class Dankicode { 
    constructor() { 
        this.nome = 'Jonatan' ; 
        this.msg = 'Essa mensagem veio do classe Danki code' ;

    }
    printNome() { 
        console.log (this.nome);
    }
    printMsg() { 
        console.log (this.msg,this.nome)
    }
}

var dankicode = new Dankicode(); 

dankicode.printMsg(); 

console.clear(); 

// Promisse Função assincrona 

function testeP() { 
    return new Promise (function(resolve,reject){
        if (1==1){  
        resolve ('retornando msg de "resolve"')
    }else {  

        reject ('mensagem que vem de "reject"')}
    });
};

testeP().then(function(val){ 
    alert(val)
}).catch(function(error){
    alert(error)
});
console.clear(); 

// Async Await  

// Async function testA(){ 
//     return new Promise (function(resolve,reject){ 
//         setTimeout(resolve,2000,'Mensagem apos 2 segundos')
//     })
// };
//      function(){
//     await testA().then(function(val){ 
//     console.log(val) ; 
// });
// console.log('chamando depois da promise')
//     } ; 

