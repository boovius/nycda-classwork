function doStuff(fromElement1) {
  var val = getValue(fromElement1);
  var divs = document.getElementsByClassName('test')
  for (var i=0; i<divs.length; i++) {
    putValue(val, divs[i].id);
  }
}
