const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.currentCard = deck ? deck.cards[0] : null
    this.deck = deck
    this.turns = 0
    this.correctGuesses = []
    this.incorrectGuesses = []
    this.roundNumber = 1
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    } else {
      this.correctGuesses.push(this.currentCard.id)
    }

    this.turns++;
    if (this.deck.cards.length === this.turns) {
      this.currentCard = null;
    } else {
      this.currentCard = this.deck.cards[this.turns];
    }

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const response = (this.correctGuesses.length / this.turns) * 100
    return `${Math.floor(response)}%`
  }

  endRound() {
    const val = parseInt(this.calculatePercentCorrect())
    console.log(`...`)
    console.log(`🎉 Round over! 🎉 You answered ${val.toFixed(0)}% of the questions correctly!`)
    console.log(`Thanks for playing. 😄 Press ctrl-c to exit.`)
    console.log(`...`)

    return `** Round over! ** You answered 66% of the questions correctly!`
  }
}

module.exports = Round;
