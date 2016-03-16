$(function() {

	$('#stopButton').click(lightRed);
	$('#slowButton').click(lightYellow);
	$('#goButton').click(lightGreen);

	function lightRed() {
		clearLights();
		$('#stopLight').css('background', 'red');
	}

	function lightYellow() {
		clearLights();
		$('#slowLight').css('background', 'yellow');

	}

	function lightGreen() {
		clearLights();
		$('#goLight').css('background', 'green');

	}

	function clearLights() {

		$('#stopLight').css('background', 'black');
		$('#slowLight').css('background', 'black');
		$('#goLight').css('background', 'black');
	}

});