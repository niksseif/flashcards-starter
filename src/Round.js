const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0]
    this.deck = deck
    this.turns = 0
    this.correctGuesses = []
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  // round.takeTurn(id)
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
      // return turn.giveFeedback()
    }
    // else if (turn.evaluateGuess() === true) {
    //   this.correctGuesses.push(this.currentCard.id)
    //   return turn.giveFeedback()
    // }

    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    // console.log("TURN.GIVEFEEDBACK ", turn.giveFeedback())
    return turn.giveFeedback();
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
