$(function(){

	$("#stopButton").click(stopButton);
	$("#slowButton").click(slowButton);
	$("#goButton").click(goButton);

	function stopButton(){
		$('.bulb').css('background' , 'black');
		$('#stopLight').css('background', 'red');
	}

	function slowButton(){
		$('.bulb').css('background' , 'black');
		$('#slowLight').css('background', 'yellow');
	}

	function goButton(){
		$('.bulb').css('background' , 'black');
		$('#goLight').css('background', 'green');
	}	
});