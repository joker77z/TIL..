const countUpperCase = string => {
  let count = 0;
  string.split('').forEach(s => {
    if (s === s.toUpperCase()) count++;
  });
  return count;

  //
};
console.log(countUpperCase('KoreaTimeGood'));

// str.match(/[A-Z]/g).length
