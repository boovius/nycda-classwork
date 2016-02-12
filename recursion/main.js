$(document).ready(function(){
  // Get a word from a user
  // spit out to the screen each letter of that word
  // spit each letter in increasing intervals by 1 second

//**********
  // get our word
    // give input field
    // grab the value of the input
  // loop the length of the word times
  // each time through loop grab a single char
  // wait a certain amount of time

  $('#submit').click(function(e){
    var word = $('#word').val();
    var letters = word.split('');

    function recursion(letters, counter){
      if (letters.length === 0) {
        return;
      }

      var letter = letters.shift();
      $('#output').append("<h3>" + letter + "</h3>");

      var delay = 1000 * counter;
      counter++;

      window.setTimeout(recursion, delay, letters, counter);
    }

    recursion(letters, 1);
  });
});
