$(document).ready(function(){
  // function myFunc (){
  //   console.log(this);
  //   console.log(this === window);
  // }

  // myFunc();

  function superVariableFunction() {
    var superVariable = 'super';
  }

  var object = {
    prop: 'objectName',
    method: function(){
      console.log('from the method() of object');
      console.log(this);
      console.log(this === window);
      var that = this;
      console.log('echoing out superVariable');
      console.log(superVariable);

      function moreThis(){
        console.log('from moreThis a function within a method')
        console.log(this);
        console.log(this === window);
        console.log('logging out that');
        console.log(that);
        console.log(that === window);
      }

      moreThis();
    },
  }

  object.method();

  $('h1').click(function(){
    console.log('from the click handler bound to h1');
    console.log(this);
    console.log(this === window);
  });
});

