$(document).ready(function() {
  var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  var suits = ["clubs", "hearts", "spades", "diamonds"]
  cards.forEach(function(card) {
    suits.forEach(function(suit) {
      var output = (card + " of " + suit)
      $(".results").append("<li>" + output + "</li>");
    });
});
});
