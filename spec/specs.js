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
