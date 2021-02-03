const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
    const game = new Game()

    expect(Game).to.be.a('function');
    expect(game).to.exist;
  });

  it('should keep track of the current round', () => {
    const round = new Round();
    const game = new Game(round);

    expect(game.currentRound).to.be.an('object');
    expect(game.currentRound).to.be.instanceOf(Round);
  });

  it('should start a game', () => {
    const card1 = new Card(1, "What allows you to define a set of related " +
      "information using key-value pairs?", ["object", "array", "function"],
      "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");
    const card3 = new Card(6, "What is an example of a mutator method?",
      ["sort()", "map()", "join()"], "sort()");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const game = new Game(round);

    expect(game).to.exist;
    game.start();

    expect(deck).to.exist;
    expect(round).to.exist;
  });
});
