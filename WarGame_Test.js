const expect = chai. expect;
//describe and it are mocha functions

describe(`Week6_Funtions`, () => {
    describe(`#createDeck`, () => {
        it(`Should create an array of 52 cards`, () => {
            let x = this.cards;
            expect(x).to.equal.length(52);
        });
    });
});