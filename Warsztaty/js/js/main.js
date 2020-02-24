function send(event) {
    event.preventDefault()
    let person= {
        imie: document.getElementById('fname').value,
        nazwisko: document.getElementById('lname').value
    }
    console.log(person)
}

let formularz = document.getElementById('formularz')
formularz.addEventListener('submit', send)

function changeInput(dane){
    // let info = document.getElementById('change').value
    console.log("TCL: changeInput -> info", dane)
    
}
