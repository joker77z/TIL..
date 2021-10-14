function solution(arr) {
  if (arr.length < 3) return false;
  let lt = 0;
  let rt = arr.length - 1;
  let cnt = 0;
  while (lt < rt) {
    if (arr[lt] < arr[lt + 1]) {
      lt++;
      continue;
    }
    if (arr[rt] < arr[rt - 1]) {
      rt--;
      continue;
    }
    if (lt === arr.length - 1 || rt === 0) return false;
  }
  return true;
}
console.log(solution([0, 3, 2, 1])); // true
console.log(solution([3, 2, 1, 2, 3])); // false
console.log(solution([1, 7, 6, 5, 4, 2, 1, 3])); // false
console.log(solution([0, 1, 2, 1, 2])); // false
