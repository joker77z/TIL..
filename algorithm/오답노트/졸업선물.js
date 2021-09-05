/*
    예산 m으로 최대 몇명 학생에게 사줄 수 있는지? 최대 학생수.
    선생님은 상품 한개를 50%할인해서 살 수 있는 쿠폰 가지고 있다.

    PseudoCode
    모든 경우의 수를 구해야 한다.
    선물에 50%할인된 가격을 하나씩 다 해봐야 한다.
*/

function solution(n, m) {
  // n = n.sort((a, b) => {
  //   if(a[0]===b[0]) return a[1]-b[1];
  //   return a[0]-b[0];
  // })
  n = n.sort((a, b) => {
    return (a[0]+a[1]) - (b[0]+b[1]);
  })
  console.log(n)
  let answer=0;
  for (let i = 0; i < n.length; i++) {
    let sum = n[i][0]/2 + n[i][1];
    let cnt = 1;
    for (let j = 0; j < n.length; j++) {
      if (i !== j && sum < m) {
        sum += n[j][0] + n[j][1];
        cnt++;
        while(sum > m) {
          sum -= n[j][0] + n[j][1];
          cnt--;
          if(sum <m) break;
        }
        console.log(`i: ${i}번째 / j: ${j}번째 / sum: ${sum} / cnt: ${cnt}`)
      }
    }
    answer = Math.max(cnt, answer);
  }
  return answer;
}

console.log(
  solution(
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ],
    28
  )
); // 4
