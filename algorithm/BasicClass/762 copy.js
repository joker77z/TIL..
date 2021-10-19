// regExp 써서 0을 다 지우고 1을 남겨서 개수세서 isPrime에 넘겨줘보자.

function solution(left, right) {
  let answer = 0;
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = left; i <= right; i++) {
    let tmp = '';
    let oneCount = 0;
    tmp = i.toString(2);
    tmp = tmp.replace(/0/g, '');
    console.log(tmp);

    for (let x of tmp) {
      if (x === '1') {
        oneCount++;
      }
    }
    if (isPrime(oneCount)) {
      answer++;
    }
  }
  return answer;
}
// console.log(solution(6, 10));
console.log(solution(10, 15));
