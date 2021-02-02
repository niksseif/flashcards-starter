const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

class Game {
  constructor(round) {
    this.currentRound = round
  }

  printMessage(deck, round) {
    // eslint-disable-next-line no-console
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    var cards = []

    // create cards
    prototypeQuestions.forEach(item => {
      const newCard = new Card(item);
      cards.push(newCard);
    });

    // put cards in deck
    const deck = new Deck(cards);

    // create round
    const round = new Round(deck);

    // invoke printMessage
    this.printMessage(deck, round);

    // invoke printQuestion
    this.printQuestion(round);
  }
}

module.exports = Game;
