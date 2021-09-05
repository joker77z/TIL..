/*
    일곱 난쟁이 키 합 100.
    9명 중에서 2명을 걸러내고 7명만 출력.

    Pseudo Code
    sum = 9명 다 더한 키
    for(x of nums)
        sum -= x.
*/

function solution(nums) {
  let answer;
  let sum = nums.reduce((acc, v) => {
    return acc + v;
  }, 0);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let m = nums[i] + nums[j];
      if (sum - m === 100) {
        nums.splice(j, 1);
        nums.splice(i, 1);
      }
    }
  }
  answer = nums;
  return answer;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
