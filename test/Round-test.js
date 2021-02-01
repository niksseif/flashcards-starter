const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
// const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
    expect(round).to.exist;
  });

  it('should return current card being played', function() {
    const card = new Card(1, 'What allows you to define a set of related ' +
      'information using key-value pairs?', ['object', 'array', 'function'],
      'object');
    const round = new Round(card, 'object');

    round.returnCurrentCard();

  })

});
