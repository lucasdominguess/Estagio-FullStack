
//primeira etapa 
function verificar(id,proxP) { 
    // console.log(id)
    console.log('verificando' ,id,proxP)
    if (document.getElementById(id).checked){
        exibir(proxP)
       
    // }else
    // console.log('passando de else para  destruir ',id)
    //      destruir(id)
    
    }
    // else if (document.getElementById('option_nao').checked){
    // destruir()
    // }
}
function exibir (proxP) {
   let newP = document.getElementById(proxP); 
   console.log('chegando proxP em exibir',proxP)
    $(newP).addClass('d-flex');
    $(newP).removeClass('d-none');
    

}
function destruir(id) { 
     let newP = document.getElementById(id)
    console.log('chegando em destruir ',id)
    
    $(newP).remove().after();
    // console.log('aquiii 1 ',newP)



    }
// destruir();