$(document).ready(function(){
  function displayTime(){
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();

    $('#hours').text(hours);
    $('#minutes').text(formatMinutesAndSeconds(minutes));
    $('#seconds').text(formatMinutesAndSeconds(seconds));
    $('#milliseconds').text(milliseconds);

    ifMinOdd(minutes);
  }

  function formatMinutesAndSeconds(value) {
    if (value < 10) {
      return '0'+ value;
    } else {
      return value;
    }
  }

  function ifMinOdd(min){
    if (min % 2 === 0) {
      $('#minutes').css('color', 'red');
    }
  }

  window.setInterval(displayTime, 1);
});


// get hours, minutes, seconds, milliseconds
// display them on the page

// determine if min is odd/even
// if odd
  // change the style to be black
// else
  // change the style to another color
