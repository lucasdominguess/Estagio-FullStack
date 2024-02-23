async function buscar()  //Obtendo os dados via Ip 
{
    let response = await fetch('http://192.168.206.10/cadastro_pacientes/listar');
    let obj = await response.json()
    
    return obj
}
// Ocultando a tabela 
$("#btn-1").click(function () { 
    $('#table1').toggle();

    
    let textB = $('#btn-1').html(); //Alterando Texto do botao Ocultar/Exibir 
    if (textB == 'Ocultar') {
    $("#btn-1").html('Exibir');
    }else $("#btn-1").html("Ocultar")


});

function arrumar(obj)   //Função da Criação do Conteudo 
{       
        for (let i = 0; i < obj.length; i++) {  
        const el =obj[i];
        
        

                            //criando elementos da pag 
        const tr = document.createElement('tr');
        const nome = document.createElement('td');
        const data_nascimento = document.createElement('td');
        const bairro = document.createElement('td');
        const cep = document.createElement('td');
        const cpf = document.createElement('td');
        const email = document.createElement('td');
        const id = document.createElement('td');
        const nome_mae = document.createElement('td');
        const sexo = document.createElement('td');
        const tdbtn = document.createElement('td');
        const button = document.createElement('button');

                        // atribuindo valores
        nome.innerText = el.nome;
        data_nascimento.innerText = el.data_nascimento;
        bairro.innerText = el.bairro;
        cep.innerText = el.cep;
        cpf.innerText = el.cpf;
        email.innerText = el.email;
        id.innerText = el.id;
        nome_mae.innerText = el.nome_mae;
        sexo.innerText = el.sexo; 
        button.innerHTML = "Click";
        button.value = el.id
        button.id = el.id
      
                            //setando tabelas 
       
        tr.append(id);
        tr.append(nome);
        tr.append(data_nascimento);
        tr.append(bairro);
        tr.append(cep);
        tr.append(cpf);
        tr.append(email);
        tr.append(nome_mae);
        tr.append(sexo);
        tr.append(button);
        tdbtn.append(button);
        tr.append(tdbtn);

        $(button).addClass('btn btn-all btn-primary btn-lg'); 
        $('.b-table').append(tr)
                                // Adcionando Evento e capturando Id do botao  
        button.addEventListener('click' , () => { 
           alert (`o id é ${button.id}`)
        });



       
    };
};

// Criando Tr e th 

function tH(obj) {
                          //criando elementos da pag 
    const table1 = document.createElement('table')
    const tr = document.createElement('tr'); 
    const tbody = document.createElement('tbody');
        
    const nome= document.createElement('th');
    const data_nascimento= document.createElement("th"); 
    const bairro = document.createElement('th') ; 
    const cep = document.createElement('th'); 
    const cpf = document.createElement('th'); 
    const email = document.createElement('th');
    const id = document.createElement('th'); 
    const nome_mae = document.createElement('th')
    const sexo = document.createElement('th') 
    const editar = document.createElement('th') 
    
    const temp = obj[0]
    console.log(temp)
    
    for (let i = 0; i < obj.length; i++) {  
    const el = obj[i];
    const keys = Object.keys(el)
    
    id.innerText = keys[0] ;
    nome.innerText = keys[1] ; 
    data_nascimento.innerText = keys[2]; 
    bairro.innerText = keys[3];  
    cep.innerText  = keys[4];  
    cpf.innerText  = keys[5];  
    email.innerText =  keys[6];  
    nome_mae.innerText =  keys[7]; 
    sexo.innerText = keys[8];  
    editar.innerText = 'Editar'
    };
    
    tr.append(id); 
    tr.append(nome) ; 
    tr.append(data_nascimento); 
    tr.append(bairro); 
    tr.append(cpf); 
    tr.append(cep); 
    tr.append(email); 
    tr.append(nome_mae); 
    tr.append(sexo);
    tr.append(editar) ; 

    $("#main").append(table1);
    $(table1).append(tr) ;
    $(table1).append(tbody) ;
   
   
    $(table1).addClass('table table-dark table-stripped');
    $(tbody).addClass('b-table');
    
   
//Editando nomes nos cabeçalhos 
    $(data_nascimento).text('Data de Nascimento')
    $(nome_mae).text('Nome da Mãe')
    
    
};

 
// Chamando funçoes apos carregar a Pag 
$(document).ready(async ()=>{
let obj = await buscar();
    tH(obj);
    arrumar(obj);
    
});



