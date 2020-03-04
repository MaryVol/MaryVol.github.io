let button = document.getElementById('btn')
button.addEventListener('click',dane)


function dane() {
    fetch(`https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php`)
    .then(res => res.json())
    .then(res=>{
            console.log(res) 
            
            const person = document.getElementById('main')   
            let info = document.createElement('div')
            info.setAttribute('id', 'dane-programisty')
            info.style.height = '100px';
            info.style.width = '128px';
            let par = document.createElement('p')
            par.innerHTML = "Imię "+res.imie + " nazwisko "+ res.nazwisko +" zawód "+ res.zawod+ " miejsce pracy "+ res.firma
            info.appendChild(par)
            person.appendChild(info) 
    
    })
}
