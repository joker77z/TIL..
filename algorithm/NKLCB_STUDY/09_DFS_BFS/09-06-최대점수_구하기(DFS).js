/*
    8.1 

    ❗️ 참고
    

    ‣ 문제
    N개의 문제를 푼다.
    각 문제는. 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어진다.
    제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 한다.
    (해당 문제는 해당 시간이 걸리면 푸는 것으로 간주. 한 유형당 한개만 풀 수 있다.)

    입력 : n개의 문제정보 [점수, 시간]  / m: 제한시간
    출력 : 제한시간 안에 얻을 수 있는 최대점수

    ‣ 예시
    입력 : [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20
    출력 : 41

    ‣ 예시2
    입력 : [[15, 6], [30, 11], [23, 8], [14, 4], [10, 3], [20, 7]], 25
    출력 : 74

    ‣ 해설
    
    ‣ 깨달은 점

*/  

// 강의
// 이 문제를 푼다. 풀지 않는다.
// 앞에 푼거랑 똑같다.

// 내가 해보기
// function solution(nums, maxtime) {
//     let answer;

//     function DFS(L, sum, time) {
//         if(time > maxtime) return; // sumtime이 t를 넘었다 바로 취소.
//         else {
//             DFS(L+1, sum+nums[L][0], time+nums[L][1]);
//             DFS(L+1, sum, time);
//         }
//     }

//     DFS(0, 0, 0)
//     return answer;
// }

// console.log(solution([[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20))
// ; // 41

// ✅ 이것도 똑같이 09-05처럼 가지 컷해봐라!

// 강의코드
function solution(nums, m) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = nums.length;

    function DFS(L, sum, time) {
        if(time>m) return;
        if(L===n) {
            answer = Math.max(answer, sum);
        }
        else {
            // 1. 여기부터 시작한다.
            DFS(L+1, sum+nums[L][0], time+nums[L][1]);
            DFS(L+1, sum, time);
        }
    }
    DFS(0, 0, 0);
    return answer;
}

console.log(solution([[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20))
; // 41