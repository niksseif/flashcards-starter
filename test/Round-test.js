const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  describe('general functionality', () => {
    let round;

    beforeEach(() => {
      round = new Round();
    });

    it('should be a function', () => {
      expect(Round).to.be.a('function');
      expect(round).to.exist;
    });

    it('should be an instance of Round', () => {
      expect(round).to.be.an.instanceof(Round);
    });
  });

  describe('specific functionality', () => {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;

    beforeEach(() => {
      card1 = new Card(1, 'What word starts with o?', ['object', 'array', 'function'], 'object');
      card2 = new Card(2, 'What word starts with a?', ['array', 'object', 'function'],
        'array');
      card3 = new Card(6, 'What word starts with s?',
        ['sort()', 'map()', 'join()'], 'sort()');

      deck = new Deck([card1, card2, card3]);
      round = new Round(deck);
    })

    it('should return current card being played', () => {
      expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
    });

    it('should update turns when a guess is correct', () => {
      round.takeTurn('object');

      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses.length).to.equal(0);
    });

    it('should update turns when a guess is NOT correct', () => {
      round.takeTurn('function');

      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses.length).to.equal(1);
    });

    it('should calculate and return the percent of correct guesses', () => {
      round.takeTurn('function');
      round.takeTurn('array');
      round.takeTurn('sort()');

      expect(round.calculatePercentCorrect()).to.equal('66%');
    });

    it('should print a message to the console with percent correct', () => {
      round.takeTurn('function');
      round.takeTurn('array');
      round.takeTurn('sort()');

      expect(round.endRound()).to.equal(`** Round over! ** You answered 66% of the questions correctly!`)
    });

    it.only('should have a function reviewIncorrectQuestions that allows user ' +
      'to go through their incorrect questions', () => {
      round.takeTurn('function');
      round.takeTurn('array');
      round.takeTurn('sort()');

      expect(round.incorrectGuesses.length).to.equal(1);
      expect(round.turns).to.equal(round.deck.cards.length);

    })
  });

});
