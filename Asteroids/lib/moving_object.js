function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.strokeStyle = this.color;
};

MovingObject.prototype.move = function () {
  const newX = this.pos[0] + this.vel[0];
  const newY = this.pos[1] + this.vel[1];
  this.pos = [newX, newY];
};

module.exports = MovingObject;
