$(document).ready(function(){

  // respond to a click of button-1
  var button = $('#button-1');

  
  button.click(function(){
    // grab the value of input
    var value = $('#field-1').val()
    // populate display with value
    $('#display').append("<li class='input-1'>" + value + "</li>");
  });

  
  
});
