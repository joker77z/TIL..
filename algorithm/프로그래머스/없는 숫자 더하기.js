/**
 * ? 0부터 9까지 숫자 중 일부가 들어있는 배열 numbers가 주어짐
 * ? 여기서 찾을 수 없는 0~9까지 숫자를 모두 찾아 더하고 return
 */
function solution(numbers) {
  let saveNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = saveNumbers.reduce((total, cur) => total + cur, 0);
  for (let i = 0; i < numbers.length; i++) {
    if (saveNumbers.includes(numbers[i])) {
      sum -= numbers[i];
    }
  }
  return sum;
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
