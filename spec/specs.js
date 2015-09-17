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
    var remaining = deal(shuffledDeck);
    var userHand = remaining[1];
    expect(remaining).to.include(userHand);
  });
});
