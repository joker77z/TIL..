// 어려웠던 문제
// 문자열 압축

function solution(str) {
  let compareArr = [];
  for (let j = 1; j <= parseInt(str.length / 2); j++) {
    let tmp = '';
    let cnt = 1;
    for (let i = 0; i < str.length; i += j) {
      let cur = str.substr(i, j);
      let next = str.substr(i + j, j);
      console.log(cur, next);
      if (cur === next) {
        cnt++;
      } else {
        if (cnt >= 2) {
          tmp += cnt + cur;
          cnt = 1;
        } else {
          tmp += cur;
        }
      }
    }
    compareArr.push(tmp.length);
    console.log(tmp);
  }
  return Math.min(...compareArr);
}
// console.log(solution('aabbaccc')); // 7
// console.log(solution('ababcdcdababcdcd')); // 9
console.log(solution('abcabcdede')); // 8
