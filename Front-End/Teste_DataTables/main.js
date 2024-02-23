$(document).ready(async ()=>{
    let obj = await buscar();
    tH(Object.keys(obj[0]));

 


    for (let index = 0; index < obj.length; index++) {
        const element = obj[index];
        arrumar(element) 
      
        
    }
    $("#table1").DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json',
        },
      
        responsive: true ,
        dom: 'Bfrtip',
        buttons: [
          'csv', 'excel', 'pdf', 'print', 'colvis'
        ],
      
      })
    //   $(".dt-button").addClass('btn')
   
});

async function buscar()
{
try {
    let response = await fetch('http://192.168.206.10/cadastro_pacientes/listar');
    let obj = await response.json()

    return obj
}catch(error) {  //Identificando possivel erro 
    msgErro();
}finally {
  
};
};
// Criando Thead & Tbody da Tabela  
function tH(keys) {
    keys.push('Editar')
    keys.push('Excluir')
    let h1 =document.createElement('h1');
    h1.innerText='Tabela de Pacientes Cadastrados'
   

    let table1 = document.createElement('table');
    
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    thead.append(tr);
    table1.append(thead);
    let tbody = document.createElement('tbody');
    table1.append(tbody);
    table1.id ='table1';
    // $(table1).addClass('display')
   
    $('#main').append(table1,h1);
  
    // $('#main').append(h1);
    
   
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        const tH = document.createElement('th');
        tH.innerText = element;
        
        tr.append(tH);
    }
   
        $("#main").append(table1);

        $(table1).append(thead) ;
        $(table1).append(tbody) ;
        $(h1).addClass('h1s'); 
        $('th').addClass('labelPerso'); 
        $(table1).addClass('table table-striped display')
        $(tbody).addClass('tbody');
       
     
};
 
function arrumar(obj){      

     

        const values = Object.values(obj)
        const tr = document.createElement('tr'); 
        for (let i = 0; i < values.length; i++) {  
            const el = values[i];
            const td = document.createElement('td'); 
            td.innerText = el
            tr.append(td);
            // tr.append(button)
            
        }
        const button = document.createElement('button')
        const button2 = document.createElement('button')
        
        
        $(button).addClass('btn btn-all btn-primary ')
        $(button2).addClass('btn btn-all btn-danger ')
        
        $(button).text('Editar')
        $(button2).text('Excluir')
        button.id = values[0]
        button2.id = values[0]
        tr.id = 'tr'+values[0]  //atribuindo Id + valor passado no loop
      
  
    const td2=document.createElement('td')
    const td3=document.createElement('td')
    td2.append(button)
    td3.append(button2)
    tr.append(td2,td3)

    // $('td').filter().css({'display':'none'})
    // $('td').filter().remove()
    // values.shift();
    // $('td').hide();


    $('.tbody').append(tr);
    // $('#table1').DataTable();
    
    
    
    //evento click no botao 
    //1.       
    // button.addEventListener('click' , () => {
        
        //  msgClick(button.id)
        // });
        //3.
        // button.addEventListener('click', msgClick)
        
        
        button.addEventListener('click',btn_editar);
        button2.addEventListener('click',confirmExcluir);
    };
////////////////////////////////////////////////////////  

 

//Criando Modal & dados para alterar/cadastrar na table
function createModal(key) {
    let keys = Object.keys(key[0])
  
   
  
    // $("#myModal").show()
    $("#myModal").fadeToggle(1000)
    $('#title-cad').text('Editar Cadastro')
    // $("#myModal").fadeOut()

   
  
  
              //Criando Nome das Label
      // $('#label-name').text(keys[1])
      // $('#label-data').text(keys[2])
      // $('#label-sexo').text(keys[3])
      // $('#label-nMae').text(keys[4])
      // $('#label-email').text(keys[5])
      // $('#label-cpf').text(keys[6])
      // $('#label-cep').text(keys[7])
      // $('#label-numeroC').text(keys[8])
      // $('#label-NomeRua').text(keys[9])
      // $('#label-bairro').text(keys[10])
      // $('#label-uf').text(keys[11])
  


// valores nos Inputs
    let values = Object.values(key[0]) 
      $("#id").val(values[0])
      $("#nome").val(values[1])
      $("#data").val(values[2])
      
      let vsexo = values[3].toLowerCase(); 
      $(`#sexo_${vsexo}`).prop('checked',true)  
  
      // $("#sexo").val(values[3])
      $("#nome_mae").val(values[4])
      $("#email").val(values[5])
      $("#cpf").val(values[6])
      $("#cep").val(values[7])
      $("#nome_rua").val(values[8])
      $("#numero_casa").val(values[9])
      $("#bairro").val(values[10])
      $("#uf").val(values[11])
    
      
};
  
//Abrindo modal e eventos de Botões
async function btn_editar(key) { 
    let id = key.target.id
    let response = await fetch(`http://192.168.206.10/cadastro_pacientes/listar/${id}`);
    let obj = await response.json()
    
    // alert(id); 
    
    createModal(obj);
}

$("#btn-cad").click(function(){
    Cadastrar();
  
});

$("#fechar").click(function(){
    // $("#myModal").hide();
    sair();
}) 
$("#btn-x").click(function(){
    sair();
}) 

function excluirLinha(key) { 
    id = key.target.id
    // $('#tr'+id).fadeToggle(1500) 
    $('#tr'+id).css('display','none')
    // let Ocultos = [] ; 
};

// // Barra de pesquisa
// $("#barraPesq").on('keyup', function () {
//     let value = $(this).val().toUpperCase();
//     $("#table1 tr").filter(function() {
//         $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)

//     // $('#btn-pesquisar').click() { 
        
//     // }
// });
// });

// $("#table1").DataTable({
//     language: {
//         url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json',
//     },
//     responsive: true,
//     columnDefs: [
//         { responsivePriority: 1, targets: 1 },
//         { responsivePriority: 2, targets: 2 },
//         { responsivePriority: 3, targets: 3 }
//     ]
// })
$('#table1').DataTable( {
    buttons: {
        buttons: [
            { extend: 'copy', className: 'btn' },
            { extend: 'excel', className: 'btn' }
        ]
    }
} );