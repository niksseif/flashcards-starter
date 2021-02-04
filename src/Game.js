const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

class Game {
  constructor(round) {
    this.currentRound = round ? round : null
  }

  printMessage(deck, user) {
    // eslint-disable-next-line no-console,max-len
    console.log(`Welcome to FlashCards, ${user}! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start(user) {
    const cards = []

    prototypeQuestions.forEach(item => {
      const newCard = new Card(item.id, item.question, item.answers, item.correctAnswer);
      cards.push(newCard);
    });

    const deck = new Deck(cards);
    const round = new Round(deck);

    this.printMessage(deck, user);
    this.printQuestion(round);
  }
}

module.exports = Game;
