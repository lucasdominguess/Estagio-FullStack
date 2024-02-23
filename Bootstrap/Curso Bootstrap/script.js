// Barra de carregamento 
let barra=document.getElementById("pb1");
      
let carga=0
barra.innerHTML=carga+'%'
let intBarra=setInterval(()=> { 
    barra.style.width=carga+'%'
    
    carga++ ;
    barra.innerHTML=carga+'%'
    if(carga>=100) { 
        carga=0;
    }

},100);





//chamando função de msg atraves do evento click no dom 
const c1 = document.querySelector(".test");
// const msg=()=>{  
//     alert("Mensagem de alerta , atraves do evento click no DOM")
// }
c1.addEventListener("click" , ()=> { 
    alert("Mensagem de alerta , atraves do evento click no DOM")
    }
    );


// Jquery  

$('.card1').mouseenter(() =>{ 
    $('').toggleClass(border);
});
