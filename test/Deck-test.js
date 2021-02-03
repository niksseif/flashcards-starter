const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  describe('general functionality', () => {
    let deck;

    beforeEach(() => {
      deck = new Deck();
    });

    it('should be a function', () => {
      expect(Deck).to.be.a('function');
      expect(deck).to.exist;
    });

    it('should be an instance of Deck', () => {
      expect(deck).to.be.an.instanceof(Deck);
    });
  });

  describe('specific functionality', () => {
    let card1;
    let card2;
    let card3;
    let deck;

    beforeEach(() => {
      card1 = new Card(1, 'What allows you to define a set of related ' +
        'information using key-value pairs?', ['object', 'array', 'function'],
        'object');
      card2 = new Card(2, 'What is a comma-separated list of related values?',
        ['array', 'object', 'function'],
        'array');
      card3 = new Card(6, 'What is an example of a mutator method?',
        ['sort()', 'map()', 'join()'], 'sort()');

      deck = new Deck([card1, card2, card3]);
    })

    it('should have an array of cards', () => {
      expect(deck.cards).to.be.an('array');
    });

    it('should know how many cards are in the deck', () => {
      expect(deck.countCards()).to.equal(3)
    });
  });
});
