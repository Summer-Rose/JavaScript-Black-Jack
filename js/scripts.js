function makeDeck() {
    var deck = [];
    var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "J", "Q", "K"];

    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < ranks.length; j++) {
          var card = [suits[i], ranks[j]];
          deck.push(card);
          //debugger;
        }
    }
    return deck;

};

// helper function for makeDeck

function shuffle(deck) {
  var shuffledDeck = [];
  for (var i = deck.length; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var randomCard = deck[i];
    deck[i] = deck[j];
    deck[j] = randomCard;
    shuffledDeck.push(randomCard);
  }
  return shuffledDeck;
}



//
// $(document).ready(function() {
//
//   });
// });
