


// $(document).ready( async ()=> {
//     const obj = await buscar(); 
// //     // console.log(obj)
// });


async function buscarCard(e) { 
    // console.log(e)
     try { 
            // let nome_card = document.getElementById('buscar_card').value
            const nome_card = e
            // if (nome_card.length  > 5){
            // console.log(nome_card)
            let response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${nome_card}`);
            let obj = await response.json();
            // console.log('dentro de buscar',obj) 
            criarCard(obj)
            // console.log(obj.data[0])
            // return obj 
//}

}catch(error) {
    console.log('vindo de cach',error)
};
    
 }; 

function criarCard(obj){ 
   
    // console.log('dentro de criarCard',obj)
    // const key = Object.keys(obj)
    // const values = Object.values(obj)
    const card = obj.data[0]
  
    const card_id = card.id
    const card_name = card.name 
    const card_desc = card.desc ; 
    const card_atk = card.atk ; 
    const card_def = card.def 
    const card_image = card.card_images[0].image_url 
    const qtd_images = card.card_images.length
    console.log(qtd_images)

    // $("#img1").attr('src', card_image); 
    // $('#name').text(card_name)
    // $('#id').text(card_id)
    // $('#atk').text(card_atk)
    // $('#def').text(card_def)
  
    // $('#desc').text(card_desc)

    for (let i=0 ; i  <= qtd_images; i++){ 
        div_card = document.createElement('div')
        div_card.id = card_id
        img_card = document.createElement('img')
        img_card.id='img'+card.id
        console.log('dentro do loop ',card.card_images[i].image_url)
        $(img_card).attr('src', card.card_images[i].image_url);
        $(div_card).addClass('div_Perso')
        $(img_card).addClass('img_Perso')
        $(div_card).append(img_card);
        $("#div_img").append(div_card)

    }




    //setando conteudo do card 


}


// $("#btn_pesquisar").click((e)=>{
    
//     let valor = document.getElementById("buscar_card").value
//     console.log('o valor vem daquiiiiiiiiii',valor)
//    buscar(valor)
// })

$("#buscar_card").on('input',_.throttle(async (e)=>{
    let v = e.target.value;
    // console.log(v)
    if (v.length <= 4) {
        $("#main").html('')
    }else if (v.length > 7) {
        let resp = await buscarCard(v)
        // $("#main").html('')
        // criarCard(resp);
    }
},1200))