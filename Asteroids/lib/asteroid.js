const MovingObject = require ('./moving_object.js');
const Util = require ('./util.js');

function Asteroid(pos) {

  const options = {
    color: 'gray',
    radius: 5,
    pos: pos,
    vel: randomVec(5)
  };

  Util.inherits(Asteroid, MovingObject);

  MovingObject.constructor(options);
}

// Return a randomly oriented vector with the given length.
function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}
// Scale the length of a vector by the given amount.
function scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}

module.exports = Asteroid;
