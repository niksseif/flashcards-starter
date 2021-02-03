class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    // difference here between this.card.correctAnswer in test
    //  and this.card.id.correctAnswer in command line
    if (this.guess === this.card.correctAnswer) {
      return true
    } else if (this.guess !== this.card.correctAnswer) {
      return false
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
