// function Human(name, age, sex) {
//   this.name = name,
//   this.age = age,
//   this.sex = sex;
// }
//
// Human.prototype.dunk = function () {
//   console.log("Ayyy, let's go!");
// };
//
// const yong = new Human("Yong", 28, "M");
// console.log(yong);
// console.log(Human.prototype);

function Animal (name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog () {}

Dog.prototype = Object.create(Animal.prototype); // Dog now inherits from Animal

Dog.prototype.constructor = Dog; // otherwise instances of Dog will have 'instance.prototype.constructor === Animal'

Dog.prototype.bark = function () {
  console.log("Bark!");
};

const liesel = new Dog("Liesel");

liesel.bark();
liesel.sayHello();
