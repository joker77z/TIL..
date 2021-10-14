// 5.문자열 압축

function solution(str) {
  let newArr = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (!newArr.includes(str[i])) {
      if (count >= 2) {
        newArr += count + str[i];
      } else {
        newArr += str[i];
      }
      count = 1;
    } else {
      count += 1;
    }
  }
  if (count >= 2) {
    newArr += count;
  }
  return newArr;
}

console.log(solution("KKHSSSSSSSE"));