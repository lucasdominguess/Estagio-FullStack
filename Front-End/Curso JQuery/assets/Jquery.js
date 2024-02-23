

// Eventos forma basica  


$('#container1').click(()=> { 
    $('#h2').text('evento click disparado.. ')

})
$('#container1').mouseenter(()=>{ 
    $("#h2").text('evento Mouseenter disparado..')
})

$('#container1').mouseleave(()=> { 
    $('#h2').text('evento MouseLeave disparado.. ')
})

$('#nome').keyup(()=> {
    $('#text').text($('#nome').val())
})

// Forma de adcionar multiplos eventos  
// 1.  
$('#nome').on('click keyup',(()=> {
    $('#text').text($('#nome').val())
}));

// 2. eventos com on 

$('#container2').on ({

    click:()=> {$('#h3').text('Clique no quadrado')} ,

    mouseenter:()=>{$("#h3").text('evento Mouseenter disparado..')}, 

    mouseleave:()=>{$("#h3").text('evento Mouseleave disparado..')}
  



} ) ;

// Capturando movimento do cursor 
$(document).mousemove((e) => { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $('#text2').text("Mouse X:" + e.pageX + "  Mouse Y:" + e.pageY)
    
});

//Objeto que foi clicado 
$(document).click(function (e) { 
    $("#resultado").text('X: ' + e.pageX + "Y: " + e.pageY );
    $("#resultado").text('Objeto que foi clicado: ' + e.target.nodeName);
    
});
//Capturando o tipo de evento e quem disparou o evento 
$(document).on ({ 
    click:()=>{$('#resultado2').text(event.type + ":"+ event.which)} ,

    keydown:()=>{
        $("#resultado2").text(event.type + "+" + event.which)
        if (event.which == 13 ){ // ação a ser tomada caso enter seja pressionado 
            alert('Enter pressionado')
        }}, 

        
    });

//Parando uma propagação de um evento 
    