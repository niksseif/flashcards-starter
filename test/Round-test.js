const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  it('should return current card being played', () => {
    const card1 = new Card(1, "What allows you to define a set of related information using " +
      "key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");
    const card3 = new Card(6, "What is an example of a mutator method?",
      ["sort()", "map()", "join()"], "sort()");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should update turns when a guess is correct', () => {
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

    round.takeTurn('object');

    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should update turns when a guess is NOT correct', () => {
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

    round.takeTurn('function');

    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should calculate and return the percent of correct guesses', () => {
    const card1 = new Card(1, "What allows you to define a set of related " +
      "information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");
    const card3 = new Card(6, "What is an example of a mutator method?",
      ["sort()", "map()", "join()"], "sort()");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('function'); // incorrect

    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(1);

    round.takeTurn('array'); // correct
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses.length).to.equal(1);

    expect(round.calculatePercentCorrect()).to.equal('50%');
  });

  it('should print a round over with percentage correct message to the console', () => {
    const card1 = new Card(1, "What allows you to define a set of related " +
      "information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");

    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    round.takeTurn('function'); // incorrect
    round.takeTurn('array'); // correct

    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
  });
});
