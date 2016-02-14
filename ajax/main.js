$(document).ready(function(){

  $('#submit').click(function(){
    var url = 'http://congress.api.sunlightfoundation.com/amendments?apikey=ba1f35ab2f3a4dca9b9a63b55df665eb';
    $.get(url, function(data){
      console.log(data);
      for (var i = 0; i<data.results.length; i++) {
        var result = data.results[i];
        $('#output').append("<div>Amendment ID:" + result.amendment_id + "</div><div>"+ result.purpose +"</div>");
      }
    })
  });
});
