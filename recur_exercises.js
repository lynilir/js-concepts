const arr = [1,2,3,4,5];

Array.prototype.range = function (start, end) {
  if (end < start) {
    return [];
  }
  return this.slice(start, end+1);
};

Array.prototype.recur_range = function (start, end) {
  if (end < start) {
    return [];
  }
  if (this.length === 1) {
    return this;
  }

  return this[start].concat(recur_range(start+1, end));
};

// console.log(arr.range(1,3));
// console.log(arr.recur_range(1,3));
