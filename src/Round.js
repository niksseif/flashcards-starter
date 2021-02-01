class Round {
  constructor(card, guess) {
    this.card = card
    this.guess = guess
  }

  returnCurrentCard() {
    return this.card;
  }
}

module.exports = Round;
