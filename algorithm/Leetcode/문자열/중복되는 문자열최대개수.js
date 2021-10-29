function solution(s) {
  if (s.length < 2) return s.length;

  const sH = new Set();
  let lt = 0;
  let answer = 0;
  for (let rt = 0; rt < s.length; rt++) {
    while (sH.has(s[rt])) {
      sH.delete(s[lt]);
      lt++;
    }
    // 가지고 있지 않다.
    sH.add(s[rt]);
    answer = Math.max(answer, sH.size);
  }
  return answer;
}
console.log(solution('abcabcbb'));
