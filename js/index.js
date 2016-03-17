$(document).ready(function() {

$('#stopButton').click(switchRed);
$('#slowButton').click(switchYellow);
$('#goButton').click(switchGreen);

function switchRed() {
    clearLights ();
    $('#stopLight').addClass('red');  //"attr" replaes the class, addClass just adds a 
  }

  function switchYellow(){
    clearLights ();
    $('#slowLight').addClass('yellow');
  }
  function switchGreen () {
      clearLights ();
      $('#goLight').addClass('green');
  }

  function clearLights () {
  $("#stopLight").css("Background-color", "black");  
  $("#goLight").css("Background-color", "black"); 
  $("#slowLight").css("Background-color", "black");  
  }

});