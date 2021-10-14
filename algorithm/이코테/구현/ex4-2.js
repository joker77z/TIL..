function solution(n) {
  let answer = 0;
  const regex = /[3]/g;
  let string = '';
  for (let h = 0; h <= n; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 1; s < 60; s++) {
        string = String(h) + String(m) + String(s);
        if (regex.test(string)) {
          console.log(string);
          answer++;
        }
      }
    }
  }
  return answer;
}
console.log(solution(5));
