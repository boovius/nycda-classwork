$(document).ready(function(){

  var button = $('#button-1');
  button.click(function(){
    var value = $('#field-1').val()
    $('#display').append("<li class='input-1'>" + value + "</li>");
  });

  $('#button-2').click(function(){
    var value = $('#field-2').val();
    $('#display').append("<li class='input-1'>" + value + "</li>");
  })
  
});
