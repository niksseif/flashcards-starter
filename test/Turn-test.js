const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  describe('general functionality', () => {
    let turn;

    beforeEach(() => {
      turn = new Turn();
    });

    it('should be a function', () => {
      expect(Turn).to.be.a('function');
      expect(turn).to.exist;
    });

    it('should be an instance of Turn', () => {
      expect(turn).to.be.an.instanceof(Turn);
    });
  })

  describe('specific functionality happy path', () => {
    let card;
    let turn;

    beforeEach(() => {
      card = new Card(2, 'What word starts with a?',
        ['array', 'object', 'function'],
        'array');
      turn = new Turn('array', card);
    });

    it('should have a string for user guess and a card instance', () => {
      expect(turn.guess).to.equal(card.correctAnswer)
    });

    it('should have a method returnGuess that returns the guess', () => {
      turn.returnGuess();
      expect(turn.guess).to.equal('array');
    });

    it('should have a method returnCard that returns the card', () => {
      turn.returnCard();
      expect(turn.card).to.equal(card);
    });

    it('should evaluate to true if the guess is correct', () => {
      expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should return positive feedback about correct guess', () => {
      turn.evaluateGuess();
      expect(turn.giveFeedback()).to.equal('correct!');
    })
  })

  describe('specific functionality sad path', () => {
    let card;
    let turn;

    beforeEach(() => {
      card = new Card(2, 'What word starts with o?',
        ['array', 'object', 'function'],
        'array');
      turn = new Turn('object', card);
    });

    it('should evaluate to false if the guess is not correct', () => {
      expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should return negative feedback about incorrect guess', () => {
      turn.evaluateGuess();
      expect(turn.giveFeedback()).to.equal('incorrect!');
    });
  });
});
