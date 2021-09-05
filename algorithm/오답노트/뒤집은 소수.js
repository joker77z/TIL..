/*
    자연수를 뒤집고 소수면 출력.
*/

// 소수판별
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < parseInt(num / 2); i++) {
    if (num % i == 0) return false; // i=2~ 나눠떨어지면 소수가 아니다.
  }
  return true; // 위 조건들을 무사통과했다면 소수다.
}

function solution(nums) {
  let answer = [];
  for (let x of nums) {
    // x = Number(x.toString().split('').reverse().join(''));
    x = x.toString().split('').reverse().join('');
    if (isPrime(x)) {
      answer.push(x);
    }
  }
  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
