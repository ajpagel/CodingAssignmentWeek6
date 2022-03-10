
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* console.log(suits);
console.log(ranks);
console.log(values); */


//create a card class
//
class Card {
    constructor(value, description){
        this.value = value;
        this.description = description;
    }
    getCardValue(){ //this is just for the Mocha test
        return this.value;
    }
}



//create instance of card
/* const fiveOfDiamonds = new Card(5, "5 of Diamonds");
console.log(fiveOfDiamonds.getCardInfo()); */
// 5 of Diamonds has a value of 5 in the game of War
//test with mocha and chai


//create a deck class
//
class Deck {
    constructor(){
        this.cards = [];
    }

    createDeck(){
        this.suit = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];	
		this.value = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
            for(let x = 0; x <this.suit.length; x++){
                for(let i = 0; i <this.value.length; i++)
                this.cards.push(this.value[i], this.suit[x]);
            }
    }

    shuffleCards() { //how to shuffle elements in array flavio, not super precise
        this.cards = this.cards.sort() => Math.random() - 0.5);
    }
    returnDeck(){
        return this.cards;
    }

    dealOneCard(){
        return this.deckOfCards.pop();
    }
}

//how to get cards into deck

//create a player class
//
class Player {
    constructor (playerName){
        this.playerName= playerName;
        this.hand= [];
        this.score = 0;
    }
}
//create a game class or function
function gamePlay(){
    //getting our players
    let player1 = makePlayers();
    let player2 = makePlayers();

    // console.log(player1)
    //making the deck
    let suits =["spades", "clubs", "hearts", "diamonds"]
    let values [2, 3, 4, 5, 6, 7, 8, 9 ,10] // you can hard code values, but think about using a for loop counter for values- they dont have to start at zero
    const gameDeck = new Deck(); //this has array waiting for cards to be put in it.

    //nested for loops
    // -- suits be your outer for loop 
    // -- values be your inner for loop
    const card = new Card(values[2], `${values[2]} of ${suits[3]}s`); //repeat this
    console.log(card);

    //switch statement for jack, queen, king
// get these cards into cards array under Deck

    //shuffle the deck
    //deal the cards
    //play the rounds 
    //check for final win
}

function makePlayers(){
    const newPlayer = new Player(prompt("What's your name?"))
    return newPlayer;
}

gamePlay();