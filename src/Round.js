const Turn = require('../src/Turn');

class Round {
  constructor(deck, guess) {
    this.deck = deck
    this.turns = 0
    this.currentCard = deck[this.turns]
    this.guess = guess
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn() {
    const turn = new Turn(this.guess, this.currentCard);
    this.turns++;

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.guess)
    }
    turn.giveFeedback();

    this.currentCard = this.deck[this.turns];
  }
}

module.exports = Round;
