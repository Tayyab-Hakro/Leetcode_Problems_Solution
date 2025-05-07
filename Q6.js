var findMatrix = function(nums) {
  const freq = new Map();
  const res = [];

  for (let num of nums) {
    const count = freq.get(num) || 0;
    console.log(count)
    if (res.length <= count) {
      res.push([]);
    }
    res[count].push(num);
    freq.set(num, count + 1);
  }

  return res;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
