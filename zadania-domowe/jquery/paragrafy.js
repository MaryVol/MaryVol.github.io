$(function () {
    $('#btn').click(function (e) { 
        e.preventDefault();
        
        ($('#parent').children().first()).before($('#parent').children().last());
        
    });

    $('#btn2').click(function (e){
        e.preventDefault();
        ($('#parent').children().last()).after($('#parent').children().first());

    })

})