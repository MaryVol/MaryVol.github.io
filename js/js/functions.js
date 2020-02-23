'use strict';
// --------------------------------
function multiply(param1, param2, param3){
    let result;
    result = param1*param2*param3;
    return result;
}
let multiplyResult= multiply(3,9,10);
let drugieDzialanie= multiply(2,9,10);
console.log("wynik: multiplyresylt ", multiplyResult);
console.log("wynik: drugiedzialanie ", drugieDzialanie);

// --------------------------------
function add(param1, param2, param3){
    let result;
    result = param1+param2+param3;
    return result;
}
let addResult= add(3,9,10);
console.log("wynik: ", addResult);
// --------------------------------

function dodawanie(){
    let wynik
    wynik= 2*2;
    return wynik
}

// --------------------------------

let functionExpression = function(){
    let wynik
    wynik= 2*2
    return wynik

};
functionExpression()
console.log(functionExpression());

// --------------------------------

let arrowFunction = (param1, param2, param3, kolejnyparam) =>{
    let wynik = param1+param2*param3/kolejnyparam
    return wynik;
}
let wynikArrowFunction = arrowFunction(2, 2, 4, 7)
console.log(wynikArrowFunction)
