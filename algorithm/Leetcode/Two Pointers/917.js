function solution(s) {
  let tmp = Array(s.length).fill(0);
  if (!s.match(/[a-zA-Z]/g)) return s;
  let reverse2 = s.match(/[a-zA-Z]/g).reverse();
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-zA-Z]/)) {
      tmp[i] = reverse2.shift();
    } else {
      tmp[i] = s[i];
    }
  }
  return tmp.join('');
}
// console.log(solution('ab-cd'));
// console.log(solution('a-bC-dEf-ghIj'));
// console.log(solution('Test1ng-Leet=code-Q!'));
console.log(solution('-'));
