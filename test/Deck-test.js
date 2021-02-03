const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {

  describe('general functionality', () => {
    it('should be a function', () => {
      const deck = new Deck();

      expect(Deck).to.be.a('function');
      expect(deck).to.exist;
    });
  });

  describe('specific functionality', () => {
    const card1 = new Card(1, "What allows you to define a set of related " +
      "information using key-value pairs?", ["object", "array", "function"],
      "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array");
    const card3 = new Card(6, "What is an example of a mutator method?",
      ["sort()", "map()", "join()"], "sort()");

    const deck = new Deck([card1, card2, card3]);

    it('should have an array of cards', () => {
      expect(deck.cards).to.be.an('array');
    });

    it('should know how many cards are in the deck', () => {
      expect(deck.countCards()).to.equal(3)
    });
  });
});
