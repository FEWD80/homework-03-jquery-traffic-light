$(document).ready(function() {

 $('#stopButton').click(illuminateRed);
 $('#slowButton').click(illuminateYellow);
 $('#goButton').click(illuminateGreen);


 function illuminateRed() {
 	clearLights();
 	$('#stopLight').css('background', 'red');
 	console.log('red');
 }

 
 function illuminateYellow() { 
 	clearLights();
 	$('#slowLight').css('background', 'yellow');
 	console.log('yellow');
 }

 function illuminateGreen() {
 	clearLights();
 	$('#goLight').css('background', 'green');
 	console.log('green');
 }


 function clearLights() {
 	$('#stopLight').css('background', 'black');

 	$('#slowLight').css('background', 'black');

 	$('#goLight').css('background', 'black');
 }


});