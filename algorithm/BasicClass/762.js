function solution(left, right) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (i % num === 0) return false;
    }
    return true;
  }
  let primeCount = 0;
  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      primeCount++;
    }
  }
  console.log(primeCount);
  // if (isPrime(primeCount)) {
  // }
}
console.log(solution(6, 10));
