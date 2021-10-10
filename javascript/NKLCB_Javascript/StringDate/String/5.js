const count = (string, word) => console.log(string.match(new RegExp(word, 'g')).length);
count('COMPUTERPROGRAMMING', 'R'); // 3
