function solution(str) {
  let answer = [];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      sum += Number(str[i]);
    } else {
      answer.push(str[i]);
    }
  }
  answer = answer.sort().join('');
  return answer + sum;
}
console.log(solution('K1KA5CB7'));
console.log(solution('AJKDLSI412K4JSJ9D'));
