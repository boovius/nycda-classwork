$(document).ready(function(){
  $('#button-1').click(function(){
    var val = $('#field-1').val();
    $('#display').append('<h1>'+val+'</h1>');
  })
});
