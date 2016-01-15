// Refactor branching  into looping

$(document).ready(function() {
  var total = 0;
  var userInput;
  var charArray = ['jarjar','vader', 'kylo', 'obiwan', 'obiwan', 'poe', 'poe','finn','rey','rey','han', 'han', 'luke', 'luke', 'leia', 'leia'];

  $("form").submit(function(event) {
    for(var i = 1; i < 6 ; i ++) {
      var userInput = $("input[name=optionsRadios" + i + "]:checked").val();
      userInput = parseInt(userInput);
      total += userInput;
    }
      var characters = (charArray[total]);
      $("h1").text(characters);
      event.preventDefault();
  });
  $('.btn-refresh').click(function(){
    window.location.reload();
  });
});
