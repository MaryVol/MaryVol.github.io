$(function () {
$('#tabela-select').change(function(){
    let tabelaNbp= $(this).val()
    console.log("tabelaNbp", tabelaNbp)
    fetch(`http://api.nbp.pl/api/exchangerates/tables/${tabelaNbp}/?format=json`)
    .then(res=>res.json())
    .then(res=> {
        const notowania = res[0].rates
        let tabela = res[0].table
        let allRates= $('#all-rates')
        allRates.empty()
        let olElement= $('<ol></ol>')
        if(tabela=="C"){
            notowania.forEach(item => {
            let walutaOpis= item.currency+ " "+item.code+" "+item.bid+" "+item.ask
            let liElement= createElement('li', walutaOpis)
            olElement.append(liElement)
            });
            allRates.append(olElement)
        }else{
            notowania.forEach(item => {
                let walutaOpis= item.currency+ " "+item.code+" "+item.mid
                let liElement= createElement('li', walutaOpis)
                olElement.append(liElement)
            });
            allRates.append(olElement)
        }

    })
})

function createElement(tag,val) {
    let element= document.createElement(tag)
    element.innerHTML = val
    return element
    
}
    
        
    
})