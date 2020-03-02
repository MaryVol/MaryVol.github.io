function oblicz(){


let wplata= parseInt(document.getElementById("wplata").value)
let okresKapitalizacji= parseInt(document.getElementById("kapitalizacja").value)
let iloscLat= parseInt(document.getElementById("ilosc-lat").value)
let stopaZwrotu= parseInt(document.getElementById("stopa-zwrotu").value)
let wyplata= (wplata*Math.pow(1+stopaZwrotu/okresKapitalizacji, iloscLat*okresKapitalizacji))

let newElement= document.createElement('p')
newElement.innerHTML= "Twoja wyplata "+ wyplata.toFixed(2)
document.getElementById('result').appendChild(newElement)

}

function english() {
    let en=['main','about','portfolio','contact']
    console.log("english -> en", en)
    let ulElement= document.createElement('ul')
    en.forEach(item => {
        let liElement= document.createElement('li')
        liElement.innerHTML= ""
        liElement.innerHTML= en[item]
        liElement.setAttribute('name', en)
        ulElement.appendChild(liElement)
        
    });
    
    
    
}
function polish() {
    let pl=['glowna','onas','portfolio','kontakt']
    let ulElement= document.createElement('ul')
    pl.forEach(item => {
        let liElement= document.createElement('li')
        liElement.innerHTML= ""
        liElement.innerHTML= pl[item]
        liElement.setAttribute('name', pl)
        ulElement.appendChild(liElement)
    });
    
    
}








// fetch('https://jsonplaceholder.typicode.com/users') 
// .then(res => res.json())
// .then(res => {
//     console.log(res)
//     const allPosts= document.getElementById('all-posts')
//     let ulPost= document.createElement('ul')
//     ulPost.setAttribute('class', 'all-post-ul all-post-ul__bg')
//     res.forEach(element => {
//         let liPost= document.createElement('li')
//         liPost.setAttribute('class', 'all-post-li' )
//         liPost.innerHTML= element.name
//         liPost.onclick= () => {
//             detalUser(element)
//         }
//         ulPost.appendChild(liPost)
//     });
//     allPosts.appendChild(ulPost)
// })

// function detalUser(user) {
//     let onePost = document.getElementById('one-post')
//     onePost.innerHTML= ''
//     let h1= createElement('h1', '', "Dane uzytkownika")
//     let name= createElement('span', 'view-name', "Name: "+user.name)
//     const allAdres="Address: "+ user.address.street+ " "+user.address.suite+ " "+user.address.zipcode+" "+user.address.city
//     let city= createElement('p', 'view-city', allAdres)
//     onePost.appendChild(h1)
//     onePost.appendChild(name).appendChild(city)
// }
// function createElement(tag, className, val) {
//     let newElement = document.createElement(tag)
//     newElement.setAttribute('class', className)
//     newElement.innerHTML= val
//     return newElement
    
// }