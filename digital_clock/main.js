$(document).ready(function(){
  function displayTime(){
    var x = new Date;
    // $('#hours').text(x.getHours());
    // $('#minutes').text(x.getMinutes());
    // $('#seconds').text(x.getSeconds());
    $('#thetime').text(x.toLocaleString());
  }
  window.setInterval(displayTime, 1000);
});
