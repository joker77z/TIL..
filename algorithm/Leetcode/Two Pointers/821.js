function solution(s, C) {
  let arr = Array(s.length).fill(Infinity);
  let tmp = [];
  tmp[0] = s[0] === C ? 0 : Infinity;
  for (let lt = 1; lt < s.length; lt++) {
    tmp[lt] = s[lt] === C ? 0 : tmp[lt - 1] + 1;
  }

  let rt = s.length - 1;
  for (rt = s.length - 2; rt >= 0; rt--) {
    tmp[rt] = s[rt] === C ? 0 : Math.min(tmp[rt], tmp[rt + 1] + 1);
  }
  return tmp;
}
console.log(solution('loveleetcode', 'e'));
