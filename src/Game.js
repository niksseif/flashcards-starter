const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

class Game {
  constructor(round) {
    this.currentRound = round ? round : null;
  }

  printMessage(deck) {
    // eslint-disable-next-line no-console,max-len
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }

  printStartOverMessage(deck) {
    console.log(`Starting over with ${deck.countCards()} cards you got wrong.`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = []

    prototypeQuestions.forEach(item => {
      const newCard = new Card(item.id, item.question, item.answers, item.correctAnswer);
      cards.push(newCard);
    });

    const deck = new Deck(cards);
    const round = new Round(deck);

    this.printMessage(deck);
    this.printQuestion(round);
  }

  startOver() {
    if (this.currentRound.startRoundOver === true) {
      const startOverCards = []

      this.currentRound.incorrectGuesses.forEach(item => {
        const newCard = new Card(item.id, item.question, item.answers, item.correctAnswer);
        startOverCards.push(newCard);
      });

      const deck = new Deck(startOverCards);
      const round = new Round(deck);

      this.printStartOverMessage(deck);
      this.printQuestion(round);
    }
  }
}

module.exports = Game;
