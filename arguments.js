function sum () {
  const args = Array.from(arguments);
  let runSum = 0;
  args.forEach( (el) => {
    runSum += el;
  });
  return runSum;
}

function sum2(...args) {
  let runSum = 0;
  args.forEach( (el) => {
    runSum += el;
  });
  return runSum;
}

Function.prototype.myBind = function (ctx) {
  return () => this.apply(ctx);
};

Function.prototype.myBind = function (ctx) {
  const bindArgs = Array.from(arguments).slice(1);
  const thisVar = this;
  return function () {
    const callArgs = Array.from(arguments);
    return thisVar.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

function curriedSum(numArgs) {
  let numbers = [];
  const _curriedSum = function(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.reduce(function (a, b) {
        return a + b;
      }, 0);
    }

    return _curriedSum;
  };

  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  // const thisVar = this;
  const _curried = (number) => {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return this.apply(null, numbers);
    }

    return _curried;
  };

  return _curried;
};

Function.prototype.curry2 = function (numArgs) {
  let numbers = [];
  const _curried = (number) => {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return this(...numbers);
    }

    return _curried;
  };

  return _curried;
};
