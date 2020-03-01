function get(num) { //wyswietlamy liczby w inpucie
    console.log(num)
    //document.getElementById('inputText').value = document.getElementById('inputText').value+num
    document.getElementById('inputText').value += num
}

function zliczanie() {
    //pobieramy to co jest napisane w inpucie
    let dzialanieDoWykonania= document.getElementById('inputText')
    //funkcja eval liczy to co pobralismy
    let wartoscPobranaZInputDoPoliczania= document.getElementById('inputText').value
    dzialanieDoWykonania.value=eval(dzialanieDoWykonania.value)
}

function clean() {
    document.getElementById('inputText').value=''
    
}
document.getElementById('clean').addEventListener('click',clean)
