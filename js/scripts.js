var playDeck = [];

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
  return deck;
}

function deal(shuffledDeck, num) {
  var computerHand = shuffledDeck.splice(0, num);
  var userHand = shuffledDeck.splice(0, num);
  var remaining = [];
  remaining.push(computerHand);
  remaining.push(userHand);
  remaining.push(shuffledDeck);
  return remaining;
}

function calculateHandValue(hand) {
  var handValue = 0;

  for (var i = 0; i < hand.length; i++) {

    /* loop to assign value to face cards */
    var faceCards = ["J", "Q", "K"];
    if (faceCards.indexOf(hand[i][1]) !==-1) {
      handValue += 10;
    }

    /* loop to assign value to number cards */
    var numberCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
    if (numberCards.indexOf(hand[i][1]) !==-1) {
      var integer = parseInt(hand[i][1]);
      handValue += integer;
    }

    //TODO: add function to allow compute and user to choose pt. val for Ace
    /* for now, always assign A- 11 points*/
    var ace = "A";
    if (ace.match(hand[i][1])) {
      handValue += 11;
    }
  }

  return handValue;
}

//
// $(document).ready(function() {
//
//   });
// });
