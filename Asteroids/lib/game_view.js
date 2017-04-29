const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

Game.prototype.start = function () {
  setInterval(() => {
    this.game.moveObjects();
  }, 20)
}
