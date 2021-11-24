/**
 * ? 주어진 숫자 중 3개 수를 더했을 때 소수가 되는 경우의 수.
 * ? nums주어질 때 3개더해서 소수되는 경우의 수는?
 */

function solution(nums) {
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
      // if (i % num === 0) return false;
    }
    return true;
  }
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let tmp = nums[i] + nums[j] + nums[k];
        console.log(i, j, k, tmp);
        if (isPrime(tmp)) answer++;
      }
    }
  }
  return answer;
}
console.log(solution([1, 2, 3, 4]));
