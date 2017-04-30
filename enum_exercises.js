Array.prototype.myEach = function (func) {

  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }

  return this;
};

const arr = [1,2,3,4];

// arr.myEach((i) => {
//   console.log(i);
// });

Array.prototype.myMap = function (func) {
  const resArr = [];
  this.myEach((el) => {
    resArr.push(func(el));
  });

  return resArr;
};

Array.prototype.myInject = function (func) {
  let acc = this[0];
  this.slice(1).myEach((el) => {
    acc = func(acc, el);
  });
  return acc;
};


console.log(arr.myInject( (total, item) => total + item ));
