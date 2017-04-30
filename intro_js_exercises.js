function uniq(arr) {
  let res_arr = [];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (res_arr.includes(arr[i])) {
      continue;
    } else {
      res_arr.push(arr[i]);
    }
  }
  return res_arr;
}

Array.prototype.twoSum = function () {
  let res_arr = [];
  for (var i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        res_arr.push([i, j]);
      }
    }
  }
  return res_arr;
};

Array.prototype.transpose = function () {
  const columns = [];
  for (let i = 0; i < this[0].length; i++) {
    columns.push([]);
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j].push(this[i][j]);
    }
  }

  return columns;
};
