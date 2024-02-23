
const obj = [
    {"id":"02", "nome": "Sofia Ramos", "dataNascimento": "1992-05-15", "sexo": "Feminino", "nomeMae": "Ana Ramos", "email": "sofia.ramos@email.com", "cpf": "123.456.789-00", "cep": "12345-678", "nomeRua": "Rua da Amizade", "numeroCasa": 123, "bairro": "Centro", "uf": "SP" },
    {"id":"03", "nome": "Liam Johnson", "dataNascimento": "1997-08-22", "sexo": "Masculino", "nomeMae": "Emma Johnson", "email": "liam.johnson@email.com", "cpf": "987.654.321-00", "cep": "56789-012", "nomeRua": "Avenida da Inovação", "numeroCasa": 456, "bairro": "Vila Nova", "uf": "RJ" },
    {"id":"04", "nome": "Emma Chen", "dataNascimento": "1994-11-10", "sexo": "Feminino", "nomeMae": "Li Chen", "email": "emma.chen@email.com", "cpf": "234.567.890-11", "cep": "34567-890", "nomeRua": "Travessa das Descobertas", "numeroCasa": 789, "bairro": "Jardim Primavera", "uf": "MG" },
    {"id":"05", "nome": "Lucas Costa", "dataNascimento": "1987-03-25", "sexo": "Masculino", "nomeMae": "Ana Costa", "email": "lucas.costa@email.com", "cpf": "876.543.210-22", "cep": "45678-901", "nomeRua": "Rua dos Médicos", "numeroCasa": 1011, "bairro": "Hospitalar", "uf": "PE" },
    {"id":"06", "nome": "Isabella Ferrari", "dataNascimento": "1982-09-05", "sexo": "Feminino", "nomeMae": "Maria Ferrari", "email": "isabella.ferrari@email.com", "cpf": "345.678.901-33", "cep": "56789-012", "nomeRua": "Rua dos Advogados", "numeroCasa": 1213, "bairro": "Jurídico", "uf": "BA" },
    {"id":"07", "nome": "Noah Kim", "dataNascimento": "2000-12-18", "sexo": "Masculino", "nomeMae": "Ji Kim", "email": "noah.kim@email.com", "cpf": "765.432.109-44", "cep": "67890-123", "nomeRua": "Rua dos Estudantes", "numeroCasa": 1415, "bairro": "Universitário", "uf": "SC" },
    {"id":"09", "nome": "Mia Nguyen", "dataNascimento": "1993-07-30", "sexo": "Feminino", "nomeMae": "Linh Nguyen", "email": "mia.nguyen@email.com", "cpf": "123.098.765-55", "cep": "78901-234", "nomeRua": "Avenida das Arquiteturas", "numeroCasa": 1617, "bairro": "Arquitetônico", "uf": "RS" },
    {"id":"10", "nome": "Oliver Schmidt", "dataNascimento": "1990-02-14", "sexo": "Masculino", "nomeMae": "Eva Schmidt", "email": "oliver.schmidt@email.com", "cpf": "890.123.456-66", "cep": "89012-345", "nomeRua": "Rua dos Professores", "numeroCasa": 1819, "bairro": "Universitário", "uf": "PR" },
    {"id":"11", "nome": "Amelia López", "dataNascimento": "1995-06-08", "sexo": "Feminino", "nomeMae": "Luisa López", "email": "amelia.lopez@email.com", "cpf": "210.987.654-77", "cep": "90123-456", "nomeRua": "Avenida da Imprensa", "numeroCasa": 2021, "bairro": "Comunicação", "uf": "GO" },
    {"id":"12", "nome": "Benjamin Dubois", "dataNascimento": "1979-04-02", "sexo": "Masculino", "nomeMae": "Isabelle Dubois", "email": "benjamin.dubois@email.com", "cpf": "987.654.321-00", "cep": "34567-890", "nomeRua": "Rua dos Chefs", "numeroCasa": 2223, "bairro": "Gastronômico", "uf": "CE" },
    {"id":"13", "nome": "Ava Ibrahim", "dataNascimento": "1998-01-20", "sexo": "Feminino", "nomeMae": "Fatima Ibrahim", "email": "ava.ibrahim@email.com", "cpf": "876.543.210-11", "cep": "45678-901", "nomeRua": "Rua dos Desenvolvedores", "numeroCasa": 2425, "bairro": "Tecnológico", "uf": "BA" },
    {"id":"14", "nome": "Ethan Martinez", "dataNascimento": "1993-09-03", "sexo": "Masculino", "nomeMae": "Maria Martinez", "email": "ethan.martinez@email.com", "cpf": "234.567.890-22", "cep": "56789-012", "nomeRua": "Rua dos Músicos", "numeroCasa": 2627, "bairro": "Artístico", "uf": "MG" },
    {"id":"15", "nome": "Charlotte Kowalski", "dataNascimento": "1991-05-12", "sexo": "Feminino", "nomeMae": "Katarzyna Kowalski", "email": "charlotte.kowalski@email.com", "cpf": "765.432.109-33", "cep": "67890-123", "nomeRua": "Rua das Empresas", "numeroCasa": 2829, "bairro": "Empresarial", "uf": "SP" },
    {"id":"16", "nome": "Harper Alves", "dataNascimento": "2000-08-28", "sexo": "Feminino", "nomeMae": "Ana Alves", "email": "harper.alves@email.com", "cpf": "321.098.765-44", "cep": "78901-234", "nomeRua": "Avenida das Fotos", "numeroCasa": 3031, "bairro": "Fotográfico", "uf": "RJ" },
    {"id":"banana", "nome": "William Jansen", "dataNascimento": "1986-11-15", "sexo": "Masculino", "nomeMae": "Sophie Jansen", "email": "william.jansen@email.com", "cpf": "543.210.987-55", "cep": "90123-456", "nomeRua": "Avenida Financeira", "numeroCasa": 3233, "bairro": "Financeiro", "uf": "PE" },
    {"id":"18", "nome": "Grace Lee", "dataNascimento": "1988-07-20", "sexo": "Feminino", "nomeMae": "Jin Lee", "email": "grace.lee@email.com", "cpf": "123.456.789-66", "cep": "89012-345", "nomeRua": "Rua dos Psicólogos", "numeroCasa": 3435, "bairro": "Psicológico", "uf": "MG" },
    {"id":"19", "nome": "James O'Connor", "dataNascimento": "1982-04-18", "sexo": "Masculino", "nomeMae": "Molly O'Connor", "email": "james.oconnor@email.com", "cpf": "234.567.890-77", "cep": "90123-456", "nomeRua": "Rua dos Pilotos", "numeroCasa": 3637, "bairro": "Aeronáutico", "uf": "RS" },
    {"id":"20", "nome": "Lily Wong", "dataNascimento": "2001-01-25", "sexo": "Feminino", "nomeMae": "Mei Wong", "email": "lily.wong@email.com", "cpf": "876.543.210-88", "cep": "34567-890", "nomeRua": "Rua Ambiental", "numeroCasa": 3839, "bairro": "Ambiental", "uf": "PR" },
    {"id":"21", "nome": "Alexander Petrov", "dataNascimento": "1987-06-30", "sexo": "Masculino", "nomeMae": "Svetlana Petrov", "email": "alexander.petrov@email.com", "cpf": "987.654.321-99", "cep": "56789-012", "nomeRua": "Rua dos Engenheiros", "numeroCasa": 4041, "bairro": "Engenharia", "uf": "GO" },
    {"id":"22", "nome": "Zoe Smith", "dataNascimento": "1992-10-12", "sexo": "Feminino", "nomeMae": "Emily Smith", "email": "zoe.smith@email.com", "cpf": "210.987.654-00", "cep": "67890-123", "nomeRua": "Avenida Veterinária", "numeroCasa": 4243, "bairro": "Veterinário", "uf": "CE" }
    ];
// console.log(typeof(obj))
    // {"id":"02", "nome": "Sofia Ramos", "dataNascimento": "1992-05-15", "sexo": "Feminino", "nomeMae": "Ana Ramos", "email": "sofia.ramos@email.com", "cpf": "123.456.789-00", "cep": "12345-678", "nomeRua": "Rua da Amizade", "numeroCasa": 123, "bairro": "Centro", "uf": "SP" },
    // {"id":"03", "nome": "Liam Johnson", "dataNascimento": "1997-08-22", "sexo": "Masculino", "nomeMae": "Emma Johnson", "email": "liam.johnson@email.com", "cpf": "987.654.321-00", "cep": "56789-012", "nomeRua": "Avenida da Inovação", "numeroCasa": 456, "bairro": "Vila Nova", "uf": "RJ" },

let id = Object.keys(obj) // sem passar o [0] 
// console.log(id) // ira so mostrar o indice 
// console.log(id[0])
// console.log(id[1])
// console.log('#############################')
let id2 = Object.keys(obj[0])
// console.log(id2)
// console.log(id2.id)
// console.log(id2[1])
// console.log('#############################')
// console.log('#############################')
let values = Object.values(obj)
// console.log(values)
// console.log(values[0])
// console.log(values[1])

// // console.log('#############################')
let values2 = Object.values(obj[1])
// console.log('PRIMEIRO',values2)
// console.log('SEGUNDO ',values2[0])
// console.log('TERCEIRO',values2[1])
// console.log('TERCEIRO',values2[2])

// console.log(values.nomes)
// console.log(obj[3].nome)
// console.log(obj[1])

for(let i = 0 ; i < obj.length ; i++){
    let lista = obj[i].nome
    
    let div = document.createElement('div');
    
    div.innerHTML = `
  
    <div id="${obj[i].id}" class="card d-flex">
        <span>Nome : ${obj[i].nome} </span>
        <span>Nascimento: ${obj[i].dataNascimento}</span>
        <span>CPF: ${obj[i].cpf}  </span>
       
        <div id='div_buttons${obj[i].id}'class="div_buttons d-none"> 
            <button id='${obj[i].id}' class="btn btn1 btn-primary"> Editar</button>
            <button id='btn2${obj[i].id}' class="btn btn2 btn-danger"> Excluir</button>
        </div>
    </div>
      
    `
    $("#div_cards").append(div)
    
    
}
;

$('.btn1').click(() =>{
    let id = event.target.id ;
   console.log('botao clicado',id)
   btn_editar(id,obj)
}); 
function btn_editar(key,obj) {
    // let id = key.target.id
    console.log('aqui e a ',key)
    let id2 = Object.keys(obj[0])
    // console.log('Obj>>', obj.nome)
    let values = Object.values(obj)
    // const result = obj.filter('id')
    // console.log(result)
    // console.log(id2.id)
    // // let id = key.target.id
    // // let values = Object.values(obj[id])
    // // console.log(id)
    // // console.log(id)
    console.log('print 2',id2)
    // console.log(obj[0])
    // console.log(key)
    // console.log('print 3', values[1])
    

    
    // createModal(key);
}
$(".card").on({
    
    mouseenter: (function () { 
        const id =event.target.id
        
        $(`#div_buttons${id}`).addClass('d-flex');
        $(`#div_buttons${id}`).removeClass('d-none');
    }),
   mouseleave: (function () { 
        const id =event.target.id
        $(`#div_buttons${id}`).addClass('d-none');
        $(`#div_buttons${id}`).removeClass('d-flex');
    }),
    // click: function (id) { 
    //     const id =event.target.id
    //     $(`#btn1${id}`)(()=>{
    //         alert('oi');
    //     })
    //  }



});

//Cadastrar 

function createModal(key) {
    // let keys = Object.keys(key[0])
  
   
  
    // $("#myModal").show()
    $("#myModal").show(1000)
  
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
    const r = key[0] ;
    let c = Object.keys(r); 
  
  
    [... c].forEach((j) =>{
        $(`#${j}`).val(r[j]);

     
    })
    //   $("#id").val(values[0])
    //   $("#nome").val(values[1])
    //   $("#data").val(values[2])
      
    // //   let vsexo = values[3].toLowerCase(); 
    // //   $(`#sexo_${vsexo}`).prop('checked',true)  
  
    //   $("#sexo").val(values[3])
    //   $("#nome_mae").val(values[4])
    //   $("#email").val(values[5])
    //   $("#cpf").val(values[6])
    //   $("#cep").val(values[7])
    //   $("#nome_rua").val(values[8])
    //   $("#numero_casa").val(values[9])
    //   $("#bairro").val(values[10])
    //   $("#uf").val(values[11])
    
      
};
function Cadastrar(key,obj) { 
    $("#myModal").show(1000)
    // $("#title-cad").text('Cadastrar')
    limparCampos() 
  }
  function limparCampos(){ 
      $('#id').val('')
      $('#nome').val('')
      $('#data').val('')
      $('#nome_mae').val('')
      $('#email').val('')
      $('#cpf').val('')
      $('#cep').val('')
      $('#nome_rua').val('')
      $('#numero_casa').val('')
      $('#bairro').val('')
      $('#uf').val('')
  }
  function limparCamposCep(){
    $('#nome_rua').val('')
    $('#numero_casa').val('')
    $('#bairro').val('')
    $('#uf').val('')
  }
  // Capturando valor do campo de cep
  $("#cep").on('input', ()=>{ 
    let value = $("#cep").val()
    
    let newValue = value.replace(/[^0-9]/,'')
    buscaCep(newValue); 
    
    
  })
  
  //Apagando dados dos campos Backspace
  
        //  $('#cep').on({
        //     keydown:()=> {$('input') == 8 | 127  
        //         $('#nome_rua').val('')
        //         $('#bairro').val('')
        //         $('#uf').val('')
        //       }
  // })
  async function buscaCep(key) { 
        const cep = key
            if (cep == /^\d{5}\-?\d{3}$/.exec(key) ){
                const dadosEnd = await fetch(`https://opencep.com/v1/${cep}`);
  
              if (dadosEnd.status !== 200 ) {
                  msgErroCep(key)
                  return false
              
              }
                const EndCompl = await dadosEnd.json()
                preencheCep(EndCompl);
         
          }else { 
            limparCamposCep()
  }
  
  function preencheCep(key) { 
  
      valor = Object.values(key)
      // $('#cep').val(valor[0])
      $('#nome_rua').val(valor[1])
      $('#uf').val(valor[5])
      $('#bairro').val(valor[3])
  }    
  
  };
  
// Botoes do modal  
function sair() {
    Swal.fire({ 
    title: 'Deseja realmente sair? Dados serão Perdidos! ',
    showDenyButton: true,            
    confirmButtonText: "Sim",
    denyButtonText: `Não`,
    icon : 'question',
    
  
    }).then((result) => {
   
    if (result.isConfirmed) {  
   
        $("#myModal").fadeToggle('slow');
     
      // Swal.fire(`O ID do paciente é ${button.id}`, "", "info");
    } else if (result.isDenied) {
      // Swal.fire("OK!");
      
    }
  })
  };

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

for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].cpf);
}