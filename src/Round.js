const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.currentCard = deck ? deck.cards[0] : null
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard.id;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }

    turn.giveFeedback();
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
  }

  calculatePercentCorrect() {
    const response = (this.incorrectGuesses.length / this.turns) * 100
    return `${response}%`
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }
}

module.exports = Round;
