function solution(arr) {
  const up = Array(arr.length).fill(0);
  const down = Array(arr.length).fill(0);
  let lengthArr = Array(arr.length).fill(0);

  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      up[i] = cnt;
      cnt++;
    } else {
      up[i] = cnt;
      cnt = 1;
    }
  }
  console.log(up);

  cnt = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      down[i] = cnt;
      cnt++;
    } else {
      down[i] = cnt;
      cnt = 1;
    }
  }

  console.log(up);
  console.log(down);

  // ! up이나 down 중에서 최대값이 1이면 증가를 하지 못했거나 감소를 하지 못함
  if (Math.max(...up) === 1 || Math.max(...down) === 1) {
    return 0;
  }

  for (let i = 0; i < lengthArr.length; i++) {
    if (up[i] === 1 || down[i] === 1) continue;
    lengthArr[i] = up[i] + down[i] - 1;
  }
  if (answer < 3) return 0;
  answer = Math.max(...lengthArr);
  return answer;
}
// console.log(solution([2, 1, 4, 7, 3, 2, 5]));
console.log(solution([0, 1, 2, 5, 3, 7]));
