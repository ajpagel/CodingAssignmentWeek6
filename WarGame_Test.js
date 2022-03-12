const expect = chai.expect;
//describe and it are mocha functions

describe('MyFunctions', function(){
	describe('#Deck constructor', function(){
		it("Constructor creates a new instance of the Deck", function(){
			testDeck1 = new Deck();
			expect(testDeck1).to.be.an('object');
		});
	});

    describe("shuffleDeckFunction", function () {
        describe("#shuffleDeck", function () {
            it("should shuffle the cards and return 52 cards", function () {
                const testdeck = new Deck();
                testdeck.createDeck();
                testdeck.shuffleDeck();
                console.log(testdeck.cards);
                expect(testdeck.cards).to.have.length(52);
            });
        });
    });
});