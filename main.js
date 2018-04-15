$(document).ready(function() {
	horloge();
});

var week = ["DIM.", "LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM."];
var months = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"];
var son = document.querySelector('#son');

function horloge() {
	var d = new Date();
	$('#hours').css("transform", "rotate("+30*d.getHours()+"deg)");
	$('#minutes').css("transform", "rotate("+6*d.getMinutes()+"deg)");
	$('#seconds').css("transform", "rotate("+6*d.getSeconds()+"deg)");

	$('#digitBox').html(week[d.getDay()] + ' ' + d.getDate() + ' ' + months[d.getMonth()] + '<br>' + d.getHours() + ' : ' + d.getMinutes());

	setTimeout(horloge, 1000);
	setTimeout(son.play(), 1000);
}

$('.volon').show();
var volumee = true;
var btnVolume = document.querySelector(".volumeContainer");
btnVolume.addEventListener("click", function() {
	if(volumee) {
		son.volume = 0;
		volumee = false;
		$('.volon').hide();
		$('.voloff').show();
	}
	else {
		son.volume = 1;
		volumee = true;
		$('.volon').show();
		$('.voloff').hide();
	}
});