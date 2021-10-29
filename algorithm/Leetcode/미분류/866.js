function solution(n) {
  n = n - 1;

  function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function isPalindrome(bitNum) {
    bitNum = String(bitNum);
    let lt = 0;
    let rt = bitNum.length - 1;
    while (lt <= rt) {
      if (bitNum[lt] !== bitNum[rt]) return false;
      lt++;
      rt--;
    }
    return true;
  }

  while (true) {
    n++;
    console.log(n);
    if (!isPrime(n)) {
      continue;
    }
    if (isPalindrome(n)) {
      return n;
    }
  }
}
// }
// console.log(solution(6));
// console.log(solution(8));
// console.log(solution(13));
console.log(solution(192));
