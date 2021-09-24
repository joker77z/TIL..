const num = [1, 2, 3, 4].reduce((acc, cur, i, arr) => {
  console.log(acc, cur);
  return acc + cur;
}, 0);
