$(document).ready(function(){
  var cookieColor = Cookies.get('color');
  if (cookieColor != undefined) {
    setHeaderColor(cookieColor);
  }
  
  $('#color-picker').submit(function(e){
    e.preventDefault();
    var selectedColor = $("input[name='color']:checked").val();
    Cookies.set('color', selectedColor);
    setHeaderColor(selectedColor);
  });
});

function setHeaderColor(color) {
  $('#header').css('color', color);
}
