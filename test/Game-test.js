const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  describe('general functionality', () => {
    let game;

    beforeEach(() => {
      game = new Game();
    });

    it('should be a function', () => {
      expect(Game).to.be.a('function');
      expect(game).to.exist;
    });

    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });
  });

  describe('round functionality', () => {
    it('should keep track of the current round', () => {
      const round = new Round();
      const game = new Game(round);
      expect(game.currentRound).to.be.an('object');
      expect(game.currentRound).to.be.instanceOf(Round);
    });
  });

  describe('game functionality', () => {
    it('should start a game', () => {
      const card1 = new Card(1, 'What word starts with o?', ['object', 'array', 'function'],
        'object');
      const card2 = new Card(2, 'What word starts with a?',
        ['array', 'object', 'function'],
        'array');
      const card3 = new Card(6, 'What word starts with s?',
        ['sort()', 'map()', 'join()'], 'sort()');

      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      const game = new Game(round);

      expect(game).to.exist;
      game.start();

      expect(deck).to.exist;
      expect(round).to.exist;
    });
  });
});
