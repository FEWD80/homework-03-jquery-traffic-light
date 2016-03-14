$(document).ready(function(){

  $('#stopButton').click(switchRed);
  $('#slowButton').click(switchYellow);
  $('#goButton').click(switchGreen);

  function switchRed() {
    clearLights();
    $('#stopLight').css('background-color','red');
  }

  function switchYellow() {
     clearLights();
    $('#slowLight').css('background-color','yellow');
  }

  function switchGreen() {
     clearLights();
    $('#goLight').css('background-color','green')
  }

  function clearLights() {
  $('.bulb').css('background-color','black');
}


  // 1) Add the code to accomodate using jQuery
  //    to make the other buttons work as expected

  // 2) There always more then one way to do things,
  //    practice your research skills to look up another
  //    way to add a class to an element using jquery
});
