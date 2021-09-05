/*
    행의 합, 열의 합, 대각선의 합 중 가장 큰 합을 출력
*/
function solution(nums) {
  let n = nums.length;
  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let sumX = (sumY = 0);
    for (let j = 0; j < n; j++) {
      sumX += nums[i][j];
      sumY += nums[j][i];
    }
    answer = Math.max(answer, sumX, sumY);
  }
  let sumX = (sumY = 0);
  for (let i = 0; i < n; i++) {
    sumX += nums[i][i];
    sumY += nums[i][n - i - 1];
  }
  answer = Math.max(answer, sumX, sumY);
  return answer;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
