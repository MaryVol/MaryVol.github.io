//Funkcja document.ready() - wersja skrócona
$(function () {
	'use strict';

	// $('#hide').click(function(){
	// 	$('.nowydiv').fadeOut('slow')
	// })
	// $('#hide').dblclick(() =>{
	// 	$('.nowydiv').fadeIn(5000)
	// })
	// $('#hide').click(function(){
	// 	$('.nowydiv').hide('slow')
	// })
	// $('#hide').dblclick(() =>{
	// 	$('.nowydiv').show(5000)
	// })
	$('#hide').click(()=>{
		$('.nowydiv').animate({
			left: '150px',
			opacity: '0.5',
			height: '150px',
		},
		1000,
		aa
		)
	})
	function aa(){
		alert(123)
	}












































// 	// //Efekt hide i show
// 	// $('p').hide(5000, hideEnd).show(3000,showText);

// 	// function hideEnd() {
// 	// 	console.log("Hide się zakoniczył")
// 	// }
// 	// function showText() {
// 	// 	console.log("show się zakoniczył")
// 	// }
// 	//Efekt fadeOut i fadeIn 
// 	// $('h1').fadeOut(3000).fadeIn(3000);

// 	//Efekt slideUp i slideDown
// 	// $('h2').slideUp(3000).slideDown(3000);



// 	//Funkcja zwrotna animacji - tzw. callback
// 	function animacja() {
// 		console.log("zakończono pierwszą animację. Zaraz startuje druga :)");
// 		$('h3').animate({
// 			'font-size': '1em',
// 			'margin-left': '0px'
// 		}, 2000);
// 	}


// 	//Efekt animacji z funkcja zwrotną animacja
// 	$('h3').animate({
// 			'font-size': '3em',
// 			'margin-left': '100px'
// 		},
// 		2000,animacja);


// 		const order = {
// 			imie: "",
// 			nazwisko: "",
// 			sosy: [],
// 			zgoda: Boolean
// 		}

});