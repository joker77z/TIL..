// words 단어 하나씩 보면서 allowed에 있는 단어가 아니면 false
// 다 지나가면 true

function solution(allowed, words) {
  const allowedMap = new Set();
  for (let i = 0; i < allowed.length; i++) {
    allowedMap.add(allowed[i]);
  }
  let cnt = 0;
  for (let i = 0; i < words.length; i++) {
    let flag = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowedMap.has(words[i][j])) {
        console.log(i, j);
        flag = false;
        break;
      }
    }
    if (flag) cnt++;
  }
  return cnt;
}
console.log(solution('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']));
