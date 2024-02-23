import _, { map } from 'https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-esm-min.js';
 
 
function montar(obj)
{
    for (let i = 0; i < obj.length; i++) {
        const el = obj[i];
        let li = document.createElement('li');
        li.id = 'liPerso'                                    //onmouseover="fntest(this)
        li.innerHTML = `
        <div id="div_${el.id}" class="card cardPerso">
                    <div class="row" >
                        <p><span class="spanPerso">Nome:&nbsp;&nbsp;</span>${el.nome}</p>
                        <p><span class="spanPerso" >Nascimento:&nbsp;&nbsp;</span>${el.data_nascimento}</p>
                        <div class="col-6 form-group">
                            <p><span class="spanPerso">CPF:&nbsp;&nbsp;</span>${el.cpf}</p>
                        </div>
                        <div class="col-6 form-group">
                            <p><span class="spanPerso">CEP:&nbsp;&nbsp;</span>${el.cep}</p>
                        </div>
                        <div class='div_btn '>
                        <button id="${el.id}" type="button" class="btnEdit btn btn-primary">Editar</button>
                        <button id="btn2-${el.id}" class="btn btn-danger">Excluir</button>
                        </div>
                        
                    </div>
                </div>`
        

        $("#ul_list").append(li)
          
        btnEdits('.btnEdit')
    }
    function btnEdits(key){
         $(key).click(function (e) {
         btn_editar(`${e.target.id}`)
        
   
}); 
}
}

 
async function buscar(v)
{
    let resposta = await fetch(`http://192.168.206.10/cadastro_pacientes/buscar/${v}`);
    
    let obj = await resposta.json()
    if(!obj.length){
        setTimeout(
        msgErro,2500)
    }
    return obj
}

$("#ipt_search").on('input',_.throttle(async (e)=>{
    let v = e.target.value;
   console.log(v)
    // if (v.length <= 4) {
    //     $("#ul_list").html('')
    // }else if (v.length > 4) {
    //     let res = await buscar(v)
    //     $("#ul_list").html('')
    //     montar(res);
    // }
},1200))


function msgErro(key) {
    Swal.fire({
        title: 'Erro!',
        text: 'Cadastro nao encontrado',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
}

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

        console.log('aqui e o J ',j)
        console.log('aqui e o C ',c)
        console.log('aqui é o R',r[j])
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
function Cadastrar(key) { 
    $("#myModal").show(1500)
    $("#title-cad").text('Cadastrar')
    // limparCampos() 
}
//Abrindo modal e eventos de Botões
async function btn_editar(key) { 
    let id = key
    let response = await fetch(`http://192.168.206.10/cadastro_pacientes/listar/${id}`);
    let obj = await response.json()
    

    
    createModal(obj);
}

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
