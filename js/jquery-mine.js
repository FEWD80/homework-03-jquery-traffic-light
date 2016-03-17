// $('stopbutton').css('onclick', )
// $('#stopButton').click(function() {
// 	$('#stopbutton').
// });

$(function() {
	
	$('#stopButton').click(stopFunc);
	$('#slowButton').click(slowFunc);
	$('#goButton').click(goFunc);

	function stopFunc() {
		clearLights();
		$('#stopLight').css('backgroundColor', 'red');
	}

	function slowFunc() {
		clearLights();
		$('#slowLight').css('backgroundColor', 'yellow');
	}
	function goFunc() {
		clearLights();
		$('#goLight').css('backgroundColor', 'green');
	}
	function clearLights() {
		$('#stopLight').css('backgroundColor', 'black');
		$('#slowLight').css('backgroundColor', 'black');
		$('#goLight').css('backgroundColor', 'black');
	}
});



// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateYellow;
// document.getElementById('goButton').onclick = illuminateGreen;

// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }
// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }
// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }