const Asteroid = require ('./asteroid.js');

function Game() {
  this.DIM_X = 500;
  this.DIM_Y = 500;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  while (this.asteroids.length < this.NUM_ASTEROIDS) {
    this.asteroids.push(new Asteroid(this.randomPosition()));
  }
};

Game.prototype.randomPosition = function () {
  const x = Math.random() * this.DIM_X;
  const y = Math.random() * this.DIM_Y;
  return [x, y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach( (asteroid) => {
    asteroid.draw();
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach( (asteroid) => {
    asteroid.move();
  });
};

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'purple';
});
