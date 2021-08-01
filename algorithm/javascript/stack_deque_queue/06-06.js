/*
  교육과정

  1년 수업 계획.
  수업 중 필수과목 있다.
  반드시 이수. 순서도 정해져 있다.
  
  예) A, B, C, D, E, F, G
    여기서 필수과목이 CBA로 주어지면이 순서대로 꼭 계획을 짜야한다.
    설계가 잘된 것이면 "YES" 아니면 "NO"
*/

// 강사님 말 듣고 푼 풀이. 좀헤깔린다.

// function solution(needs, plan) {
//     let queue = needs.split('');
//     let answer = "YES"

//     for (x of queue) { // C, B, A
//       if(queue.includes(x)) {
//         queue.shift();
//       }
//       if(queue[0] !== plan[0]) {
//         answer = "NO";
//       }
//     }
//     if(queue.length>0) {
//       answer = "NO";
//     }
//     return answer;
// }

// console.log(solution("CBA", "CBDAGE"))

// 강사님 풀이
function solution(needs, plan) {
  let answer = "YES";
  let queue = needs.split('');
  for(let x of plan) {
    if(queue.includes(x)) { // 만났다면
      if(x!== queue.shift()) { 
        // 근데 plan의 원소x와 needs에서 제일 앞에서 뺀 원소와 다르다면 NO.
        return "NO";
      }
    }
  }
  if(queue.length>0) return "NO"
  return answer;
}

console.log(solution("CBA", "CBDAGE"))