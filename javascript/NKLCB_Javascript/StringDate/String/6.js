const toggleCase = string =>
  console.log(
    string.replace(/./g, str => (str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()))
  );

toggleCase('StuDY');
