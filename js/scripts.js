function makeDeck() {
    var deck = [];
    var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < ranks.length; j++) {
          var card = [suits[i], ranks[j]];
          deck.push(card);
        }
    }
    return deck;
};

function shuffle(deck) {
  for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
  debugger;
  return deck;
}

function generateHand(cards) {
  var hand = cards.splice(0, 2);
  var remainingCards = cards;
  return [hand, remainingCards];
}

function deal(shuffledDeck) {
  var computerHand = shuffledDeck.splice(0, 2);
  var userHand = shuffledDeck.splice(0, 2);
  var remaining = [];
  remaining.push(computerHand);
  remaining.push(userHand);
  remaining.push(shuffledDeck);
  return remaining;
}

//
// $(document).ready(function() {
//
//   });
// });
