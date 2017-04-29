Function.prototype.inherits = function (superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function (superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}
MovingObject.prototype.test = 'hello';

function Ship () {}
Ship.inherits2(MovingObject);
function Asteroid () {}
Asteroid.inherits2(MovingObject);

const s = new Ship();
console.log(s.test);
