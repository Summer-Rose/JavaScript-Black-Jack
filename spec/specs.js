describe('newGame', function() {
  it("calls shuffle function and saves return in playDeck var", function() {
    newGame();
    expect(playDeck[0]).to.not.eql(["Clubs", "A"]);
  });
});



describe('makeDeck', function() {
  it("returns an array of cards", function() {
    var deck = makeDeck();
    expect(deck).to.have.length(52);
  });

  it("includes specific card", function() {
    var deck = makeDeck();
    expect(deck[0]).to.eql(["Clubs", "A"]);
  });

  it("includes specific card", function() {
    var deck = makeDeck();
    expect(deck[14]).to.eql(["Diamonds", "2"]);
  });
});

describe('shuffle', function() {
  it("returns an randomized deck array", function() {
    var deck = makeDeck();
    expect(deck[0]).to.eql(["Clubs", "A"]);
    var shuffledDeck = shuffle(deck);
    expect(deck[0]).to.not.eql(["Clubs", "A"]);
  });

  it("returns a deck of 52 cards", function() {
    var deck = makeDeck();
    var shuffledDeck = shuffle(deck);
    expect(shuffledDeck).to.have.length(52);
  });
});

describe('deal', function() {
  it("returns two hands and remaining cards", function() {
    var deck = makeDeck();
    var shuffledDeck = shuffle(deck);
    var userHand = [];
    deal(shuffledDeck, userHand);
    expect(userHand).to.have.length(1);
  });
});

describe('calculateHandValue', function() {
  it("adds the value of each card in a hand", function() {
    expect(calculateHandValue([["Clubs", "2"], ["Spades", "9"]])).to.equal(11);
  });

  it("adds the correct value for face cards", function() {
    expect(calculateHandValue([["Clubs", "J"], ["Hearts", "Q"]])).to.equal(20);
  });

  it("adds 11 points for Aces", function() {
    expect(calculateHandValue([["Clubs", "A"], ["Hearts", "Q"]])).to.equal(21);
  });

})
