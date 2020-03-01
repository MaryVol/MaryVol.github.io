let number=Math.floor(Math.random()*10)

fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
.then(res=> res.json())
.then(res=>{
	console.log(res)
	let elem= document.getElementById('resName')
	elem.appendChild("Have a good day, " + res.username)
	
}).catch(err => {
	console.log(err)
})



// $("#btnGetData").click(function () {
// 	let id = $("#number").val();
// 	console.log(id)


// 	if (id <= 9) {
// 		$.getJSON(
// 			`https://jsonplaceholder.typicode.com/users/${id}`,
// 			function (data) {

// 				// wyswietl w konsoli
// 				console.log(data);
// 			}
// 		)
// 	} else {
// 		alert("błąd ")
// 	}
// })




// // $.getJSON(
// // 	`https://jsonplaceholder.typicode.com/users/${id}`,
// // 	function (data) {

// // 		// wyswietl w konsoli
// // 		console.log(data);
// // 	}
// // );



// function dodawanie(a, b) {

// 	console.log(a + b)
// 	1
// }


// dodawanie(4, 6);
// dodawanie(4, 6);


