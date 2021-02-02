const Turn = require('../src/Turn');

class Round {
  constructor(deck, guess) {
    this.currentCard = deck ? deck.cards[0] : null
    this.deck = deck
    this.turns = 0
    this.guess = guess
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn() {
    const turn = new Turn(this.guess, this.currentCard);

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }

    turn.giveFeedback();

    this.turns++;
    this.currentCard = this.deck[this.turns];
  }
}

module.exports = Round;
