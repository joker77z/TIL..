function solution(string) {
  let answer = [];
  let realAnser = [];
  let tmp = '';
  // 제곱근까지만
  function isPrime(num) {
    // sqrt가 기억안나면 이렇게 해라.
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      // 숫자일 때
      tmp += string[i];
    } else {
      // 숫자 아닐 때
      if (tmp.length > 0) {
        answer.push(Number(tmp));
        tmp = '';
      }
    }
  }
  answer.push(Number(tmp));

  for (let x of answer) {
    if (isPrime(x)) {
      realAnser.push(x);
    }
  }
  return realAnser;
}
console.log(solution('13ab23a5f21of34e11'));
