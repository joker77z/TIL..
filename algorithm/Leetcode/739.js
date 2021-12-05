/**
 *
 */
function solution(temperatures) {
  let stack = [];
  let answer = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
    console.log(answer);
  }
  return answer;
}
console.log(solution([73, 74, 75, 71, 69, 72, 76, 73]));
