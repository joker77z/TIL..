/*
    1. queue 가장 앞 중요도 확인
    2. 현재 문서보다 중요도 높은게 하나라도 있으면 제일 뒤로 재배치.
        2-1 아니면 바로 인쇄.
*/

function solution(queue, target) {
  let arr = Array.from({ length: queue.length }, () => 0);
  arr[target] = 1;
  let flag = true;
  let flag2 = false;

  let check = 0;
  // 다른 요소가 더 크다는 것 판별
  while (flag) {
    let tmp = queue[0];
    for (let i = 1; i < queue.length; i++) {
      if (tmp < queue[i]) {
        // 더 큰 것을 발견했다면
        flag2 = true;
        break;
      }
    }
    if (flag2) {
      console.log(queue);
      queue.push(queue.shift());
      console.log(queue);
      arr.push(arr.shift());
      flag2 = false;
      console.log(check);
    } else {
      flag = false;
    }
    check++;\
    if ((check = 5)) break;
  }
  //   return arr.indexOf(1);
  //   console.log(queue);
  //   console.log(arr);
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));
// console.log(solution([1, 2, 3, 4], 2));
// console.log(solution([5], 0));
