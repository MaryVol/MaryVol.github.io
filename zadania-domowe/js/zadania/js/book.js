debugger
let btn = document.getElementById('btn');
btn.addEventListener("click",listCity);
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
function listCity(){
  
  let list = document.createElement('ol');
        cities.forEach(item => {
            let litem = createElement("li", "city", item);
            list.appendChild(litem);
        });
}
function createElement(tag, className, val) {
    let newElement = document.createElement(tag)
    newElement.setAttribute('class', className)
    newElement.innerHTML= val
    return newElement
}
