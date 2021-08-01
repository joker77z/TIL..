// 다시 풀어보기
// 틀렸다 > 다운로드 파일에 사진찍어놓은거 보고 풀기.

// function solution(num, k) {
//     // 숫자 배열화
//     let nums = [];
//     num = String(num)
//     for(x of num) {
//         nums.push(x);
//     }

//     let stack = [];
//     let cnt = 0;

//     stack.push(nums[0]);
//     for(let i=1; i<nums.length; i++) {
//         if(stack[stack.length-1] < nums[i] && k>0) {// 다음에 들어오는 것이 더 크다면?
//             stack.pop();
//             k--;
//         } 
//         stack.push(nums[i]);
//     }
//     return stack.join('')
// }

// console.log(solution(2322113, 3))
// 2113

// 이 문제의 복잡도는 n번도다. for문 안에 while있다고 해서 n^2이 아니다. 안에 while문의 반복문 횟수가 중요하다.
// 이런걸 잘 알아야 n^2을 n으로 풀 수 있다.
// 나중에 3개월 뒤에 문제 낼 때 이렇게 풀어야 된다. > 궁금하면 프로그래머스에서 주식 가격
// 프로그래머스에서 큰 수 구하기 문제 꼭 풀어볼 것.