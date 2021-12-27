/**
 * 피벗 인덱스를 구해라.
 * ! 피벗 인덱스 : [좌측에 있는 원소들의 합 === 우측 원소들의 합]을 가르는 경계선
 */
function solution(nums) {
  function sum(numsArr) {
    let sum = 0;
    for (let i = 0; i < numsArr.length; i++) {
      sum += numsArr[i];
    }
    return sum;
  }

  for (let i = 0; i < nums.length; i++) {
    let leftnums = nums.slice(0, i);
    let rightnums = nums.slice(i + 1, nums.length);

    if (sum(leftnums) === sum(rightnums)) return i;
  }
  return -1;
}
console.log(solution([1, 7, 3, 6, 5, 6])); // 3
console.log(solution([2, 1, -1])); // 0
console.log(solution([-1, -1, 0, 1, 1, 0])); // 5
