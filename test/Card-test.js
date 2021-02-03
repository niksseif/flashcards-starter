const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  describe('general functionality', () => {
    let card;

    beforeEach(() => {
      card = new Card();
    })

    it('should be a function', () => {
      expect(Card).to.be.a('function');
      expect(card).to.exist;
    });

    it('should be an instance of Card', () => {
      const card = new Card();
      expect(card).to.be.an.instanceof(Card);
    });
  });

  describe('specific functionality', () => {
    let card;
    let question;

    beforeEach(() => {
      card = new Card(1, 'What word starts with o?', ['object', 'array', 'function'],
        'object');
      question = 'What word starts with o?'
    });

    it('should store a question', () => {
      expect(card.question).to.equal(question);
    });

    it('should store a list of possible answers', () => {
      expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    });

    it('should store the correct answer', () => {
      expect(card.correctAnswer).to.equal('object');
    });
  });
});
