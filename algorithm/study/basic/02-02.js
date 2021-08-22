// 2. 대소문자 변환
function solution(str) {
  const lowerStr = str.toLowerCase();
  const upperStr = str.toUpperCase();
  let newStr = '';

  for(let i = 0; i<str.length; i++) {
    if(str[i] === lowerStr[i]) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

console.log(solution('gattBG'));