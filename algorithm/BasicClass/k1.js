function solution(string) {
  let nH = new Map();
  let answer = '';
  // for (let i = 0; i < string.length; i++) {
  //   nH.set(string[i], [(nH.get(string[i]) || 0) + 1, i]);
  // }
  for (let i = 0; i < string.length; i++) {
    nH.set(string[i], [(nH.get(string[i]) || 0) + 1, i]);
  }
  console.log(nH);
  for (let [key, value] of nH) {
    if (value[0] === 1) {
      return key;
    }
  }
}
console.log(solution('statistics'));
