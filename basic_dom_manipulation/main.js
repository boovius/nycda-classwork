function doStuff(fromElement1, outputArray) {
  var val = getValue(fromElement1);
  for (var i=1; i<arguments.length; i++) {
    putValue(val, arguments[i]);
  }
}
