//Funkcja document.ready() - wersja skrócona
$(function () {
    'use strict';
	
	//pojedyncze zdarzenie na paragrafie
	$('p').click(function () {
		$(this).css("color", "orange");     
	});
	
	$("p").on(function (){
		
	})
	//grupa zdarzeń na nagłówku
	$('h1').on({
		'click': function () {
			$(this).css("color", "orange");
		},

		'mouseleave': function () {
			$(this).css("color", "inherit");
		}
	});
	$('p').click( () => {
		alert(123)
	})
	$('p').on({
		'click':function(){

		},
		'mouseover':function(){

		}//dodajemy dwa zdarzenia do jednego elementu p
	})

});