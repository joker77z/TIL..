/*
    data[string[i]] > data[string[i+1]] ? ans += data[string[i]] - tmp, tmp= 0 : tmp += data[string[i]]

*/

function solution(str) {
  let answer = 0;
  const data = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  answer = [...str].reduce((acc, cur, i) => {
    data[str[i]] < data[str[i + 1]] ? (acc -= data[str[i]]) : (acc += data[str[i]]);
    return acc;
  }, 0);
  return answer;
}
console.log(solution('III'));
console.log(solution('IV'));
