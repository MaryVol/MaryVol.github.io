'use strict';

let table=[0, 1, 2, 3, 4, 5]
const square = (table)=> {

  let kwadrat=0
      for (let i=0; i<table.length; i++){
        table.forEach(element => {
            element=parseInt(table[i]) 
        });  
        kwadrat=Math.pow(table[i],2)+Math.pow(table[i++],2)
      } 
  console.log('suma kwadratow', kwadrat)
}
square(table);
//------------------------------------------

function sumaKwadratow(){
  let kwadrat=0
  num.forEach(item => {
    kwadrat += Math.pow(item,2)
  })
  return kwadrat
}
let wynik = sumaKwadratow()
console.log(wynik)