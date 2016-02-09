function doStuff() {
  putAmazingStuff(val);
  var val = getValue();
}

function getValue() {
  var wordElement = document.getElementById('word');
  return wordElement.value;
}

function putAmazingStuff(newHtml){
  var bubble = document.getElementById('amazing');
  bubble.innerHTML = newHtml;
}


