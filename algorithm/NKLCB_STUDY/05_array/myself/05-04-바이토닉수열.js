function solution(arr) {
  if (arr.length < 3) return false;
  let answer = true;
  // 다음 원소가 더 크면 계속 개수를 센다.
  let lt = 0;
  let rt = arr.length - 1;

  while (lt < rt && arr[lt] < arr[lt + 1]) {
    lt++;
    console.log(lt);
  }
  // 증가수열 밖에 없으면 NO
  if (lt === rt || lt === 0) answer = false;

  // 다음 원소가 작아질 때 계속 개수를 센다.
  while (lt < rt && arr[rt] > arr[rt + 1]) {
    rt--;
  }
  // 두개 합친 개수가 원소 길이 개수와 다르다면 NO
  if (lt !== rt) answer = false;
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 3, 1])); // YES
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3])); // NO
console.log(solution([1, 2, 3, 4, 5])); // NO
console.log(solution([5, 4, 3, 2, 1])); // NO
console.log(solution([3, 5, 5])); // NO
