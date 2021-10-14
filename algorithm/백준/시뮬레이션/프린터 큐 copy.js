/*
    1. queue 가장 앞 중요도 확인
    2. 현재 문서보다 중요도 높은게 하나라도 있으면 제일 뒤로 재배치.
        2-1 아니면 바로 인쇄.
*/

function solution(queue, target) {
  let check = Array(queue.length).fill(0);
  check[target] = 1;
  let cnt = 0;
  let test = 0;
  // 더 큰게 있는지 검사한다.
  while (true) {
    test++;
    if (test === 5) break;
    // let tmp = queue[0];
    // console.log(tmp);
    // for (let i = 0; i < queue.length; i++) {
    //   if (tmp < queue[i]) {
    //     // 더 큰게 있을 때 다시 shift() 한다.
    //     flag = true;
    //     break;
    //   }
    // }
    // if (flag) {
    //   check.push(check.shift());
    //   queue.push(queue.shift());
    // } else {
    //   break;
    // }
    let tmp = queue[0];
    console.log(tmp);
    console.log(queue);
    for (let i = 0; i < queue.length; i++) {
      if (tmp < queue[i]) {
        console.log(tmp, queue[i]);
        cnt++;
      }
    }
    console.log(cnt);
    if (cnt === 0) {
      break;
    }
    if (cnt > 0) {
      check.push(check.shift());
      queue.push(queue.shift());
    }
    console.log(check);
  }
  return check.indexOf(1) + 1;
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));
// console.log(solution([1, 2, 3, 4], 2));
// console.log(solution([5], 0));
