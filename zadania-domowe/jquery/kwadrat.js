$(function(){

$('#square').css({

    'width': '200px',
    'height': '200px',
    'background-color': '#FF0000',
    'display':'inline-block',
    'position': 'absolute'

})
$('#animation').css({
    'display': 'block',
})


$('#animation').click(()=>{
    $('#square').animate({
        right: '100px',
        width: '100px',
        height: '100px',
    },
    3000,
    kolor
    )
    
})
function kolor() {
    
    $('#square').animate({
        backgroundColor: '#1b00ff',
    },
    5000,
    napis
    )
}
function napis() {
    $('#square').html("<h1>koniec animacji</h1>")
    $('#square').css({'background-color': '#1b00ff'})
    
}


});