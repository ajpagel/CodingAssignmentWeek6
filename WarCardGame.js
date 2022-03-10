/***************DECK CLASS *************/

class Deck {
	constructor(){
		this.cards = [];
	}
	createDeck(){
		this.suit = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];	
		this.face = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
		for (let s = 0; s < this.suit.length; s++){
			for (let f = 0; f < this.face.length; f++){
			this.cards.push(this.face[f] + ' of ' +this.suit[s]);
			}
		}
	}
	shuffleDeck() {  //
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

	dealOneCard(){
		return this.cards.pop();

	}

}

//test this class
let deck = new Deck();
deck.createDeck();
console.log(deck);
deck.dealOneCard();
console.log(deck); // gets rid of one card

/*************** PLAYER CLASS *************/

class Player {
	constructor(){
		this.hand = [];
		this.score = 0;
	}

	takeOneCard(card){
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


//Create, Build, and Shuffle Deck of Cards
myDeck = new Deck();
myDeck.createDeck();
myDeck.shuffleDeck();

//Create New Players
player1 = new Player();
player2 = new Player();

//Deal Cards to Players one at a time
for (let x = 0; x < 26; x++){
	player1.takeOneCard(myDeck.dealOneCard());
	player2.takeOneCard(myDeck.dealOneCard());
}


//Play each Card
for (let x = 0; x < 26; x++){

	let player1Card = player1.playCard();
	let player2Card = player2.playCard();

    console.log(player1Card);
    console.log(player2Card);

	if (player1.returnCardValue(player1Card) > player2.returnCardValue(player2Card)){
		console.log('Player one wins this round because ' + player1Card + ' beats ' + player2Card);
		player1.incrementScore();
	}
	else if (player1.returnCardValue(player1Card) < player2.returnCardValue(player2Card)){
		console.log('Player two wins this round because ' + player2Card + ' beats ' + player1Card);
		player2.incrementScore();
	}
	else{
		console.log('This round is a tie because ' + player1Card + ' ties with ' + player2Card);
	}

		
}

// Display Final results
console.log("Player 1 Final Score: " + player1.returnScore());
console.log("Player 2 Final Score: " + player2.returnScore());

