describe('makeDeck', function() {
  it("returns an array of cards", function() {
    var deck = makeDeck();
    expect(deck).to.have.length(52);
  });
});
