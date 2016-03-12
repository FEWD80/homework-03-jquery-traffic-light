// App to change colors of stop lights

// function to reset colors on lights
function clearLights() {
  $('#traffic-light div').removeClass('redLight yellowLight greenLight');
}

function illuminateGreen() {
  clearLights();
  $('#goLight').addClass('greenLight');
}

function illuminateYellow() {
  clearLights();
  $('#slowLight').addClass('yellowLight');
}

function illuminateRed() {
  clearLights();
  $('#stopLight').addClass('redLight');
}

$('#goButton').click(illuminateGreen);
$('#slowButton').click(illuminateYellow);
$('#stopButton').click(illuminateRed);
