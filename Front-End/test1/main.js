// import _,{map} from '/assets/js/underscore.js'
$("#input_pesquisar").on('input',_.throttle((e)=>{
    let obj = $("#input_pesquisar").val();
    if (obj.length > 6){
        $("#ul").html('')
        filtar(obj)
    }
   
},1500));

async function filtar(obj){ 

let response = await fetch(`http://192.168.206.10/cadastro_pacientes/buscar/${obj}`,{
    method:'get'
})
let newResponse = await response.json();
let obj = Object.values(newResponse[0])

    // console.log(keys)
    console.log(obj)
    // console.log(keys,value)
    criarCard(obj)
}; 

function criarCard(obj) {
    for (let i = 0; i < obj.length; i++) {
        const el = obj[i];
        let li = document.createElement('li');
        li.innerHTML = `
        <div class="card">
                    <div class="row">
                        <p><span>Nome:&nbsp;&nbsp;</span>${el.nome}</p>
                        <p><span>Nome da mãe:&nbsp;&nbsp;</span>Mariana de souza</p>
                        <div class="col-6 form-group">
                            <p><span>CPF:&nbsp;&nbsp;</span>24575955841</p>
                        </div>
                        <div class="col-6 form-group">
                            <p><span>CEP:&nbsp;&nbsp;</span>0574010</p>
                        </div>
                    </div>
                </div>`
 
            $("#ul_list").append(li)
 
       
    }
}

