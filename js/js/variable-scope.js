'use strict';

let number= 10;

function addNumber(){
    let number = 15;
    let newNumber = 20;
    console.log(number); //zmienna lokalna tylko wewnatrz funkcji
    console.log(newNumber); 
}

addNumber();
console.log(number); //wyloguje zmienna lokalna
console.log(newNumber); //nie mamy dostepu do tej funkcji blad