const x = (()=> { //Sintaxe Arrow function 
 2+2
})

function msgErro(key) {
    Swal.fire({
        title: 'Erro!',
        text: 'Um erro foi detectado',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
}
function msgErroCep(key) { 
  Swal.fire({
    title: 'Cep Invalido!',
    text: `o Cep "${key}" Nao é valido`,
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}
// Cadastrar  
function msgErroCad(obj) { 
  Swal.fire({
    title: 'Erro ao Cadastrar!',
    text: obj ,
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}

function msgCadastrado(obj){
  Swal.fire({
    title: 'Cadastro Realizado',
    text: 'Cadastro Realizado com Sucesso',
    icon: 'success',
    confirmButtonText: 'Ok',
    timer: 2000,
    timerProgressBar: true,
    willClose: () => {
        window.location.reload();
    }
  });
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
//Excluir linha da tabela 
function confirmExcluir(key) { 
  Swal.fire({ 
    title: 'Deseja realmente Excluir? \n Todos os dados serao Apagados! ',
    showDenyButton: true,            
    confirmButtonText: "Sim",
    denyButtonText: `Não`,
    icon : 'question',
    
  
    }).then((result) => {
   
    if (result.isConfirmed) {  
   
        excluirLinha(key); 
     
      // Swal.fire(`O ID do paciente é ${button.id}`, "", "info");
    } else if (result.isDenied) {
      // Swal.fire("OK!");
      
    }
  })
}

//sweet Alert desativadas 
// function msgLoadSuccess() { 
  //     Swal.fire({
    //         title: 'Carregamento Concluido!!!!!!!!',
    //         text: 'Pagina Carregada Com Sucesso',
    //         icon: 'success',
    //         confirmButtonText: 'Ok',
    
    //       })
    // }
    
    // function msgClick(key) { 
      //     let v_id = key.target.id
      //     Swal.fire({
        //         title: 'Evento Click !',
        //         text: `o id do botão é ${v_id}`,
        //         icon: 'info',
        //         confirmButtonText: 'Ok',
        //         background : '#555',
        //         color : '#ffffff'
        //       })
        // };
        
        // function btn_edit(key) {
          //         Swal.fire({ 
            //         title: `Deseja editar o conteudo do Id  <b>${key.target.id}</b>?`,
            //         showDenyButton: true,            
            //         confirmButtonText: "Sim",
            //         denyButtonText: `Não`
            //         }).then((result) => {
              
              //         if (result.isConfirmed) {  
                //           let id = key.target.id
                //              alertS(id) ; 
                
                //           // Swal.fire(`O ID do paciente é ${button.id}`, "", "info");
                //         } else if (result.isDenied) {
                  //           Swal.fire("OK!");
                  //         }
                  // })
                  // };
                  
                  
                  
                  // Criando Modal /////////////////////////////////////////////////////
                  
                  
                  
