const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
    expect(round).to.exist;
  });

  it('should return current card being played', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using " +
      "key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");
    const card3 = new Card(6, "What is an example of a mutator method?",
      ["sort()", "map()", "join()"], "sort()");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, 'object');

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should update turns after a turn is taken and guess is correct', function() {
    const card1 = new Card(1, "What allows you to define a set of related " +
      "information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");
    const card3 = new Card(6, "What is an example of a mutator method?",
      ["sort()", "map()", "join()"], "sort()");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, 'object');

    round.takeTurn();

    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should update turns after a turn is taken and guess NOT correct', function() {
    const card1 = new Card(1, "What allows you to define a set of related " +
      "information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");
    const card3 = new Card(6, "What is an example of a mutator method?",
      ["sort()", "map()", "join()"], "sort()");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, 'function');

    round.takeTurn();

    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(1);
  });



});
