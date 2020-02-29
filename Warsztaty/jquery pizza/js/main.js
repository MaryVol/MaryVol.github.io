$( function() {
        let priceTable = [{
            id: 1,
            price: 21
        },
        {
            id: 2,
            price: 23
        },
        {
            id: 3,
            price: 26
        },
        {
            id: 4,
            price: 27
        },
        {
            id: 5,
            price: 29
        }
    ];
    $('#pizza').change(function(){
        let pizzaType = $(this).val()
        console.log("pizzaType", pizzaType)
        let spanPrice = $('#price')

        if (pizzaType == 0) {
            spanPrice.text("0 PLN")
        }

        priceTable.forEach(item => {
            if (item.id == pizzaType) {
                spanPrice.text(item.price + " PLN")
            }
        });
    });
    $('#pizza-order').submit(function(e){
        e.preventDefault()
        let firstName= $('#name').val()
        let lastName= $('#surname').val()
        let telefon= $('#num').val()
        let kodPocztowy= $('#kod').val()
        let miasto= $('#city').val()
        let pizza= $('#pizza').val()
        let tomatoSauce = $('#sospomidorowy').is(':checked')
        let garlicSauce = $('#sosczosnkowy').is(':checked')

        let error = []
        $('#errors').empty()

        if (firstName=== ''){
            error.push('Podaj imię')
        }
        if (lastName=== ''){
            error.push('Podaj nazwisko')
        }
        if (telefon=== ''){
            error.push('Podaj telefon')
        }
        if (kodPocztowy=== ''){
            error.push('Podaj kod pocztowy')
        }
        if (miasto=== ''){
            error.push('Podaj miasto')
        }
        if (pizza=== '0'){
            error.push('Wybierz pizzę')
        }
        if (tomatoSauce === false && garlicSauce === false){
            error.push('Wybierz sos')
        }
        console.log(error)
        error.forEach(item =>{
            let err= "<li>" + item +"</li>"
            $('#errors').append(err)
        })
        let zamowienie= {
            name: firstName+" "+lastName,
            city: city,
            sosy:[tomatoSauce, garlicSauce]
        }
        console.log("zamowienie", zamowienie)
        
    })




})