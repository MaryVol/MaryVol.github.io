$(function(){
    $('#count-sum').click(function (e) { 
        e.preventDefault();
        let person = [
            $('#person1').children().last().html(),
            $('#person2').children().last().html(),
            $('#person3').children().last().html(),
            $('#person4').children().last().html(),
            $('#person5').children().last().html()
        ]
        let result = 0
        person.forEach(item => {
            num = parseInt(item)
            result += num
            return result
        });
        $('#sum').text(result); 

    });



});