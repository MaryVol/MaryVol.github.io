//typ liczbowy

let salary= 5000;
let bonus = 2500;
let wholeSalary;
wholeSalary= salary+bonus;

console.log("number", wholeSalary);
console.log(typeof wholeSalary); //typeof sprawdza rodzaj danych


// typ string

let salaryStr = 5000;
let bonusStr = "2500";
let wholeSalaryStr;

wholeSalaryStr= salaryStr+ bonusStr;

console.log("wholesalaryStr", wholeSalaryStr);

//typ logiczny boolean

let isSmog;
isSmog = false;

if (isSmog === false){
    console.log("jest smog");
} else{
    console.log("nie ma smoga");
}


//typ specjalny null, undefined

let undefinedVariable;
let nullVariable = null;

console.log(undefinedVariable);
console.log(nullVariable);


let studentsName = "michal";
console.log(studentsName.indexOf('@'));