console.log('hello world');

function gimmie13 (){
  var thirteen = 13;
  function doMore() {
    var thirteen = 6
    console.log(thirteen);
  }
  doMore()
  return thirteen;
}

console.log(gimmie13());
