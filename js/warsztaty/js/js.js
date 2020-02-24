let mainHeader =document.getElementById('main-header')  

function addPar(){
    mainHeader.innerHTML = ''
    for(let i = 0; i<10; i++){
        let paragraf = document.createElement('p')
        paragraf.innerText= "lorem ipsum" + (i +1)
        paragraf.setAttribute('class', 'main-paragraf')
        mainHeader.appendChild(paragraf)
    }
}

function deletePar(){
    mainHeader.innerHTML = ''
}
document.getElementById('deletePar').addEventListener('dblclick', deletePar)

function changeBg(){
    document.body.style.backgroundColor= 'beige'
}

let bg = document.getElementById('bg')
bg.onclick = changeBg


function changePar(){
    let allParagraf= document.getElementsByClassName('main-paragraf')
    if (allParagraf.length !=0){
        let numberParagraf =Math.floor(Math.random()*10)
        allParagraf[numberParagraf].innerHTML= 'zmienilem paragraf numer'+ (numberParagraf+1)
    }
}
document.getElementById('changePar').addEventListener('click', changePar)

function photo(){
    let mainSection = document.getElementById('mainSection')
    let foto = document.createElement('img')
    foto.setAttribute('src', './facebook.png')
    mainSection.appendChild(foto)
}

document.getElementById('photo').addEventListener('click', photo)