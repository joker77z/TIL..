// 1 : 대문자 찾기

function solution(str) {
  const upperStr = str.toUpperCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === upperStr[i]) {
      count += 1;
    }
  }
  return count;
}

console.log(solution("KoreaTimeGood"));