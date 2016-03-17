// jquery
	// $("#myelement").addClass("myclass");
// js
	// document.getElementById("myelement").className = "myclass";


$(function() {
	clearLights();
	$('#stopButton').click(illuminateRed);
	$('#slowButton').click(illuminateYellow);
	$('#goButton').click(illuminateGreen);
	
	
	function illuminateRed() {		

		clearLights(); //clear lights
		$('#stopLight').css('backgroundColor', 'red'); //turn red
	}

	function illuminateYellow() {

		clearLights(); //clear lights
		$('#slowLight').css('backgroundColor', 'yellow'); //turn yellow
	}

	function illuminateGreen() {

		clearLights(); //clear lights
		$('#goLight').css('backgroundColor', 'green'); //turn green
	}

	function clearLights() {
		
		//clear to black
  		$('#goLight').css('backgroundColor', 'black');
		$('#slowLight').css('backgroundColor', 'black');
		$('#stopLight').css('backgroundColor', 'black');
	 }

});