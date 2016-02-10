$(document).ready(function(){

  // $('form').submit(function(e){
  //   console.log(e);
  //   e.preventDefault();
  //   $('header').append('<h3>this is the new header</h3>');
  // });

// REQUIREMENTS
// when password gets above 7 change to green something

// on every key press....
// access the password field value
// count num of chars in password field
// if value.length > 7 turn green

  $('#password').keypress(function(e){
    if (e.currentTarget.value.length >= 7) {
      $('#password').css('border', '1px solid green').blur();
    }
  });

  // $('#password').change(function(event){
  //   if (event.currentTarget.value.length >= 7){
  //     alert('awesome password');
  //   } else {
  //     alert('try again loserrrrrrr');
  //   }
  // });
});
