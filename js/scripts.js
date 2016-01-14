$(document).ready(function() {
  var total = 0;
  var userInput;

  $("form").submit(function(event) {
    for(var i = 1; i < 6 ; i ++) {
      var userInput = $("input[name=optionsRadios" + i + "]:checked").val();
      userInput = parseInt(userInput);
      total += userInput;
      console.log(total);
    }

    if (total === 0) {
      alert("jarjar");
    } else if (total === 1) {
      alert("vader");
    } else if (total === 2) {
      alert("kylo");
    } else if (total <= 4) {
      alert("obiwan");
    } else if (total <= 6) {
      alert("poe");
    } else if (total === 7) {
      alert("finn");
    } else if (total <= 9) {
      alert("rey");
    } else if (total <= 11) {
      alert("han");
    } else if (total <= 13) {
      alert("luke");
    } else if (total <= 15) {
      alert("leia");
    }




    event.preventDefault();
  });

});
