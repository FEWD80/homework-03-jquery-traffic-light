$(function(){

	$('#stopButton').click(illuminateRed);
	$('#slowButton').click(illuminateYellow);
	$('#goButton').click(illuminateGreen);



	function illuminateRed (){
		$('#stopLight').css('backgroundColor', 'red');
	}

	function illuminateYellow (){
		$('#slowLight').css('backgroundColor', 'yellow');
	}

	function illuminateGreen (){
		$('#goLight').css('backgroundColor', 'green');
	}

});