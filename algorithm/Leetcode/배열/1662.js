function solution(word1, word2) {
  return word1.join('') === word2.join('');
}
console.log(solution(['ab', 'c'], ['a', 'bc']));
