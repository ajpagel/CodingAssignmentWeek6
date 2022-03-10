const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

/***************DECK CLASS *************/

class Deck {
	constructor(){
		this.cards = [];
	}
	createDeck(){
		for (let s = 0; s < suits.length; s++){
			for (let v = 0; v < values.length; v++){
			this.cards.push(values[v] + ' of ' + suits[s]);
			}
		}
	}
	shuffleDeck() {  
		for (let i = this.cards.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * i);
			let temp = this.cards[i];
			this.cards[i] = this.cards[j];
			this.cards[j] = temp;
		}
	}

	returnDeck(){
		return this.cards;
	}

	dealCard(){
		return this.cards.pop();

	}

}

//test this class
let deck = new Deck();
deck.createDeck();
console.log(deck);
deck.dealCard();
console.log(deck); // gets rid of one card

/*************** PLAYER CLASS *************/

class Player {
	constructor(name){
		this.hand = [];
		this.score = 0;
		this.playerName = name;
	}

	takeCard(card){
		this.hand.push(card);
	}

	returnHand(){
		return this.hand;
	}

	playCard(){
		return this.hand.pop();
	}
	incrementScore(){
		this.score++;
	}
	returnScore(){
		return this.score;
	}
	returnCardValue(card){
		if (card.startsWith('2')){
			return 2;
		}
		else if (card.startsWith('3')){
			return 3;
		}
		else if (card.startsWith('4')){
			return 4;
		}
		else if (card.startsWith('5')){
			return 5;
		}
		else if (card.startsWith('6')){
			return 6;
		}
		else if (card.startsWith('7')){
			return 7;
		}
		else if (card.startsWith('8')){
			return 8;
		}
		else if (card.startsWith('9')){
			return 9;
		}
		else if (card.startsWith('10')){
			return 10;
		}
		else if (card.startsWith('Jack')){
			return 11;
		}
		else if (card.startsWith('Queen')){
			return 12;
		}
		else if (card.startsWith('King')){
			return 13;
		}
		else if (card.startsWith('Ace')){
			return 14;
		}

	}

}
//creating objects of the player class
const player1 = new Player('Amanda');
const player2 = new Player('Jon');


//Create, Build, and Shuffle Deck of Cards
myDeck = new Deck();
myDeck.createDeck();
myDeck.shuffleDeck();

//Each player will get dealt one card at a time
for (let x = 0; x < 26; x++){
	player1.takeCard(myDeck.dealCard());
	player2.takeCard(myDeck.dealCard());
}


//Play each Card
for (let x = 0; x < 26; x++){
	let player1Card = player1.playCard();
	let player2Card = player2.playCard();
//see which card each player is dealt
    console.log(player1Card);
    console.log(player2Card);
//scoring for each round
	if (player1.returnCardValue(player1Card) > player2.returnCardValue(player2Card)){
		console.log(`${player1.playerName} wins this round! ${player1Card} beats ${player2Card}`);
		player1.incrementScore();
	}
	else if (player1.returnCardValue(player1Card) < player2.returnCardValue(player2Card)){
		console.log(`${player2.playerName} wins this round! ${player2Card} beats ${player1Card}`);
		player2.incrementScore();
	}
	else{
		console.log('This round is a tie!');
	}

		
}

//Final results
console.log(`${player1.playerName} Final Score: ${player1.score}`);
console.log(`${player2.playerName} Final Score: ${player2.score}`);

