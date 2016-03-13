$(document).ready(function(){
$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);

function illuminateRed() {
	clearLights();
	$('#stopLight').css('background', 'red');
}

function illuminateYellow() {
	clearLights();
	$('#slowLight').css('background', 'yellow');
}

function illuminateGreen() {
	clearLights();
	$('#goLight').css('background', 'green');
}

function clearLights() {
	$('#stopLight').css('background', 'black');
	$('#slowLight').css('background', 'black');
	$('#goLight').css('background', 'black');
}

});