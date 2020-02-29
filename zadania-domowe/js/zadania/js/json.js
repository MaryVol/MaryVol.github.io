let jsonPracownicy={
    "pracownicy":[
        {
            firstName: "Krystian", 
            lastName: "Dziopa"
        }, 
        {
            firstName: "Anna",
            lastName: "Szapiel"
        },
        {
            firstName: "Piotr",
            lastName: "Żmuda"
        }
    ]
}
console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(pracownik, index) {
    console.log(index, pracownik.firstName, pracownik.lastName)
});
