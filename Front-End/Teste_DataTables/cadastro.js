function Cadastrar(key) { 
  $("#myModal").show(1000)
  $("#title-cad").text('Cadastrar')
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

//Enviando Formulario para o Backend
async function enviar(v_form){ 

    let response = await fetch('http://192.168.206.10/cadastro_pacientes/new',{
      method:'post',
      body : v_form
    })
    let newResponse = await response.json()

    msgResponse(newResponse)
  

};

$('#btn_enviar').on('click', async ()=> {
  let v_form = new FormData(document.getElementById('form')) 
  enviar(v_form)
})

function msgResponse(newResponse) { 
  let resposta_cod = newResponse.cod
  let resposta_msg = newResponse.message
       if (resposta_cod !== 'ok' ) { 
         msgErroCad(resposta_msg); 
        return false
      }
  
    msgCadastrado();
    // setInterval(()=> {

    //   window.location.reload();
    // },3000)
}


