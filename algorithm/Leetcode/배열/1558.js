// 배열의 길이가 홀수 일때 원소들의 합
function solution(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let cnt = 0;
    for (let j = i; j < nums.length; j++) {
      if (cnt % 2 === 0) {
        sum += [...nums.slice(i, j + 1)].reduce((acc, cur) => {
          console.log(cur, acc);
          return acc + cur;
        }, 0);
        console.log(`sum : ${sum}`);
      }
      cnt++;
    }
    console.log(`${i}번째`);
  }
  return sum;
}
console.log(solution([1, 4, 2, 5, 3]));
