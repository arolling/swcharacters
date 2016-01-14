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
      $("h1").text("JarJar");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://www.gamespresso.com/wp-content/uploads/2015/06/jar_jar_binks_by_homegrown15-d7qfygq.jpg">');
    } else if (total === 1) {
      $("h1").text("Vader");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://cdn.bgr.com/2015/08/darth-vader.jpg">');
    } else if (total === 2) {
      $("h1").text("Kylo");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/2015/09/15/starwarstheforceawakens-kyloren.jpg">');
    } else if (total <= 4) {
      $("h1").text("ObiWan");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://www.geekedoutnation.com/wp-content/uploads/2014/09/Obi-Wan-Alec-Guinness.png">');
    } else if (total <= 6) {
      $("h1").text("Poe");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://static2.techinsider.io/image/56953a38e6183e263a8b8800-4133-3099/poe-dameron-bb8-star-wars.jpg">');
    } else if (total === 7) {
      $("h1").text("Finn");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://cdn.indiewire.psdops.com/dims4/INDIEWIRE/593dc77/2147483647/quality/90/brightness/0x3/?url=http%3A%2F%2Fdl9fvu4r30qs1.cloudfront.net%2F87%2F85%2Fdcd7f712420799591cbf0ed4f41b%2Ffinn-star-wars-the-force-awakens.jpg">');
    } else if (total <= 9) {
      $("h1").text("Rey");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://makingstarwars.net/wp-content/uploads/2015/12/daisy_ridley_as_rey_star_wars_the_force_awakens-1680x1050.jpg">');
    } else if (total <= 11) {
      $("h1").text("Han");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://s3.amazonaws.com/digitaltrends-uploads-prod/2012/11/han-solo.jpeg">');
    } else if (total <= 13) {
      $("h1").text("Luke");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/21/11/luke%20skywalker%20hand.jpg">');
    } else if (total <= 15) {
      $("h1").text("Leia");
      $("div.jumbotron").prepend('<img class="img-responsive" src="http://www.thatgirlmag.com/wp-content/uploads/2012/11/princess-leia.png">');
    }



    event.preventDefault();
  });
  $('.btn-refresh').click(function(){
    window.location.reload();
  });
});
