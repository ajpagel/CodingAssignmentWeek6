const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const value = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(suit);
console.log(rank);
console.log(value); 

/*************************************************************
            Player CLASS
**************************************************************/


class Player {
    constructor (name){
        this.playerName = name;
        this.playerScore = 0;
        this.playerCards = [];
    }
}


    //a name
    // a score and a way to compare the scores or get score
    // a card with suit and value
    //a method to draw a card from the hand


    //create objects of player class
const playerOne = new Player("Amanda");
const playerTwo = new Player("Jon");



/*************************************************************
            CARD CLASS
**************************************************************/

class Card { 
    // a value and method to describe each card
    constructor(suit, value, rank) {
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
    //method to describe each card
    showCard(){
        return `Suit: ${this.suit}, Value: ${this.value}, Rank: ${this.rank}`;
    }
}
/* let newCard = new Card('Clubs', 'Ace', 1); 
console.log(newCard.showCard()); */


/*************************************************************
            Deck CLASS
**************************************************************/

class Deck {
    constructor() {
        this.cards = [];
    }
    
    createDeck() {
        for(let x = 0; x < suit.length; x++) {
            for(let y = 0; y < rank.length; y++) {
                this.cards.push(new Card(suit[x], value[y], rank[y]));
            }
        }
    }
    
    //need a way to shuffle the deck that we just created
    shuffleDeck() {
        for(let i = 0; i < 52; i++){
            let tempCard= this.cards[i];
            let randomIndex = Math.floor(Math.random() * 52);
            this.cards[i]= this.cards[randomIndex];
            this.cards[randomIndex] = tempCard;
        }
    
        return this.cards;
    } 
    
    //now deal the deck that was created and shuffled. This should iterate through the deck of 52 cards and give a card to each player every other turn. Use for loop.
    dealDeck() {
        for (let i = 0; i < 52; i += 2) {
            let dealCard1 = this.cards.pop();
            playerOne.playerCards.push(dealCard1);
            let dealCard2 = this.cards.pop();
            playerTwo.playerCards.push(dealCard2); 
        }     
    } 
    
    //need to create a deck of 52 cards to be pushed to the cards array
        // then a nested loop for the deck of cards with their values/suits
        
}   
    
    
        
    //create instance of Deck Class
    const deck = new Deck();
    deck.createDeck();
    console.log(deck);
    deck.shuffleDeck();
    console.log(deck); 


    // an array of cards 
    //a method to shuffle the cards 
    // a method to deal the cards to each player 

/*************************************************************
            GAME CLASS
**************************************************************/
class PlayGame {
    constructor () {
        this.players = [];
    }    


    //need a funtion for all the steps of the game
    startNewGame() {
        this.players.push(playerOne);
        this.players.push(playerTwo);
        console.log(playerOne.playerName);
        console.log(playerTwo.playerName);
        //first create a deck for the game
        deck.createDeck();
        /* console.log(deck.cards); */
        //next shuffle the deck
        deck.shuffleDeck();
        /* console.log(deck.cards); */
        // now, we need to deal the deck
        deck.dealDeck();
        console.log(playerOne.playerCards);
        console.log(playerTwo.playerCards); //running only cards objects
        this.newRound();
        this.displayScore();
    }

    displayScore() {
        let finalScore1 = playerOne.playerScore;
        let finalScore2 = playerTwo.playerScore;
            console.log(`Score: ${playerOne.playerName} has ${finalScore1}, and ${playerTwo.playerName} has ${finalScore2}`);
        if (finalScore1 > finalScore2) {
            console.log(`${playerOne.playerName} wins!`); 
        } else if (finalScore1 < finalScore2) {
            console.log(`${playerTwo.playerName} wins!`); 
        } else {
            console.log("The game is tied!");
        }
    }

    newRound() {
        for(let round = 0; round < 26; round++){
            let playerOneCards = playerOne.playerCards.pop(); 
            let playerTwoCards = playerTwo.playerCards.pop();
            console.log(`Round ${round +1}: ${playerOne.playerName} has a ${playerOneCards.value} of ${playerOneCards.suit} and ${playerTwo.playerName} has a ${playerTwoCards.value} of ${playerTwoCards.suit} `);
            if(playerOneCards.value > playerTwoCards.value){
                console.log(`${playerOne.playerName} wins! Point awarded!`);
                playerOne.playerScore++;
            } else if(playerOneCards.value < playerTwoCards.value){
                console.log(`${playerTwo.playerName} wins! Point awarded!`);
                playerTwo.playerScore++;
            } else if(playerOneCards.value === playerTwoCards.value){
                    console.log(`Players Tied. No points given.`);
                }
            }
        }
    }     

    
//next, start the game!
let game =  new PlayGame();
game.startNewGame();




//OLD DECK

