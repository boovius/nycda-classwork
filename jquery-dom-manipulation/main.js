$(document).ready(function(){
  // var element = $('h1');
  // $('form').append(element);
  $('form').submit(function(e){
    console.log(e);
    e.preventDefault();
    $('header').append('<h3>this is the new header</h3>');
  });
});
