
table=[1, 2, 3, 4, 5, 6]

function table() {
let suma=table[0]
for (let i = 1; i < table.length; i++) {
    suma=suma+ table[i]
}  
console.log("TCL: suma", suma)

let iloczyn=table[0]
for (let i = 0; i < table.length; i++) {

    iloczyn=iloczyn * table[i]
    return iloczyn
}  
console.log("TCL: iloczyn", iloczyn)
}





