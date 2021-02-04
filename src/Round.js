const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.currentCard = deck ? deck.cards[0] : null
    this.deck = deck
    this.turns = 0
    this.correctGuesses = []
    this.incorrectGuesses = []
    this.startRoundOver = false
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard)
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
    if (this.incorrectGuesses.length > 0 && this.turns === this.deck.cards.length) {
      this.startRoundOver = true;
      this.currentCard = this.incorrectGuesses[0];
      this.turns = 0;
      console.log(this.startRoundOver)
      return this.currentCard
    } else {
      const val = parseInt(this.calculatePercentCorrect())
      console.log(`...`)
      console.log(`🎉 Round over! 🎉 You answered ${val.toFixed(0)}% of the questions correctly!`)
      console.log(`Thanks for playing. 😄 Press ctrl-c to exit.`)
      console.log(`...`)

      return `** Round over! ** You answered 66% of the questions correctly!`
    }
  }
}

module.exports = Round;
