function solution(s) {
  const answer = [];
  function isValid(str) {
    // console.log(str, str.length, !str.length);
    if (+str > 255 || !str.length) return false;
    if (str.length >= 2 && str[0] === '0') return false;
    return true;
  }

  function DFS(arr, str) {
    if (arr.length === 3) {
      if (isValid(str)) answer.push([...arr, str]);
      return;
    }
    for (let i = 1; i <= 4; i++) {
      let subStr = str.slice(0, i);
      if (!isValid(subStr)) return;
      // 유효하다면
      DFS([...arr, subStr], str.slice(i));
    }
  }
  DFS([], s);
  return answer.map(ans => ans.join('.'));
}
console.log(solution('101023'));
