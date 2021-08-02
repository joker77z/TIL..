/*
    8.1 10:50~

    ❗️ 참고
    https://jacobko.info/algorithm_advance/Algorithm_advance_49/

    ‣ 문제
    합이 같은 부분집합
    N개의 원소로 구성된 집합.
    두 개의 부분집합으로 나눴을 때 두 부분집합 원소합이 서로 같은 경우면 "YES" 아니면 "NO"

    둘로 나뉘는 부분집합은 서로소 집합이며, 두 부분집합을 합하면 입력으로 주어진 원래집합이 되어야함.

    지합의 총 합은 짝수로 이루어진다.

    ‣ 예시
    입력 : [1, 3, 5, 6, 7, 10]
    출력 : [1, 3, 5, 7] = [6, 10]  -> 16으로 같다.

    ‣ 해설
    
    ‣ 깨달은 점

*/  

// function solution(arr) {
//     let answer = "NO",
//       flag = 0; // flag 를 일단 거짓 0으로 설정
//     let total = arr.reduce((a, b) => a + b, 0); // arr의 총 합계
//     let n = arr.length;

//     function DFS(l, sum) {
//       if (flag) return; // flag 가 참일 경우 (1) 일때 재귀 함수 종료 선언
//       if (l === n) {
//         if ((total - sum) === sum) { // index 가 arr 의 마지막까지 왔을때 D(6, sum) 일때  DFS 종료 선언 -> true
//           answer = "YES"; // 만약 총 합에서 선택된 값의 합에서 뺀거와 arr 의 나머지 값의 합과 같을 경우는 YES 로 return
//           flag = 1; // yes 가 나왔기 때문에 재귀함수가 다 돌 필요 없이 flag = 1 설정 해줘서 멈추게 함
//         }
//       } else {
//         DFS(l + 1, sum + arr[l]); // 만약 arr 값을 선택 사용 할 경우는 다음 level 로 이동하면서 sum 을 누적시킴
//         DFS(l + 1, sum); // 만약 arr 값을 선택 사용하지 않을 경우는 다음 level 로 이동하는데 sum에 값을 안더하고 그냥 넘김
//       }
//     }
//     DFS(0, 0);
//     return answer;
// }
// console.log(solution([1, 3, 5, 6, 7, 10]))



//flag 찾았으면 true로 만들게.
// total에서 sum을 빼고 ? 를 하면 반이니까 부분집합의 합 반이다.
function solution(nums) {
  let answer="NO", flag=false;
  let n=nums.length;
  let total = nums.reduce((a, b) => a+b, 0)

  function DFS(L, sum) {
    if(flag) return; // 찾고나서 이후로 스택에서 잠들어있는 애들 없애고 끝내버리는 것.
    // 함수를 종료해버린다.

    if(L===n) {
      //여기로 오면 부분집합 경우 하나 완성된거다.
      //값이 절반이지 확인해야 한다.
      if((total-sum)===sum) {
        answer="YES";
        flag=true;
      }
    }
    else { // DFS(0, 0)을 내가 짠다. 함수가 호출이 두번일어나는구나! 2번써야된다. 양쪽으로 뻗어나가야 하니까!
      DFS(L+1, sum+nums[L]); // L번째 원소를 부분집합에 넣겠다.
      DFS(L+1, sum); // 이번 인덱스 내가 사용 안하니까 기존 sum그대로 넘기겠다.
    }
  }

  DFS(0, 0);
  return answer;
}
console.log(solution([1, 3, 5, 6, 7, 10]))