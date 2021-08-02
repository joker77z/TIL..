/*
    8.1 

    ❗️ 참고
    

    ‣ 문제
    철수는 바둑이들을 데리고 시장에 가려고 한다.
    그런데 그의 트럭은 C킬로그램 넘게 태울 수 없다.
    C를 넘지 않으면서 바둑이들을 가장 무겁게 태우고 싶다.

    N마리의 바둑이와 각 바둑이의 무게 W가 주어지면,
    철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하라.
    n : 마리수
    w : 각 바둑이무게 
    c : 한도 무게

    ‣ 예시
    입력 : [81, 58, 42, 33, 61], 259
    출력 : 242

    ‣ 예시2
    입력 : [34, 56, 55, 67, 33, 76, 63, 43], 379
    출력 : 372

    ‣ 해설
    
    ‣ 깨달은 점

*/  

// 강의
// 바둑이를 트럭에다가 태운다. 태우지 않는다.
// 모든 경우의 수를 보면 된다.
// 그 중에서 259를 넘지 않으면서 가장 가까운 숫자 찾으면 된다.

// 내가
// function solution(nums, max) {
//     let answer;
//     let n = nums.length;

//     function DFS(L, sum) {
//         if(L===n) {
//             if(max<=sum) {
//                 max = Math.max(max, sum);
//             }
//         }
//         else {
//             DFS(L+1, sum+nums[L]);
//             DFS(L+1, sum);
//         }
//     }
//     DFS(0, 0);
//     return answer;
// }

// console.log(solution([81, 58, 42, 33, 61], 259)) // 242

// 강사님
function solution(nums, c) {
    let answer = Number.MIN_SAFE_INTEGER;
    let total = nums.reduce((a, b)=> a+b, 0); // 컷엣지할때 필요하다.
    let n = nums.length;

    function DFS(L, sum, tsum) { // tsum은 4레벨까지 갔다그러면 0, 1, 2, 3번 인덱스들은 탄다 타지않는다. 이미 적용한 바둑이들. 3레벨까지 적용한 애들. 이미 적용된 애들 총 합. [ 적용한 애들의 총 무게 [태웠다가 아니고 판단한 애들] !]

        // sum이 태웠다는 애들이다.

        if(sum>c) return; // 아래 if로 가지 않게 바로 종료.

        //컷 시켜본다.
        if(sum+(total-tsum)<answer) return // 이 값까지 더해봤는데 answer보다 적더라. return
        // total-tsum은 앞으로 적용할 애들의 무게. 다 태운다 쳐도 적다?하면 끝내버린다. 얘를 넣지 않으면 시간복잡도가 안된다.

        // 이미 판단이 끝났고 그러면 앞으로 판단할 무게들은 total-tsum이다.
        // 다 태운다고치고 sum에다가 total-tsum을 다 더한다.
        // 근데도 answer보다도 작다? 그러면 그 가지는 가볼 필요조차 없다.return.

        if(L===n) {
            answer = Math.max(answer, sum);
        }
        else {
            DFS(L+1, sum+nums[L], tsum+nums[L]); // 트럭에다 태운다.
            DFS(L+1, sum, tsum+nums[L]); // 트럭에다 태우지 않는다.
        }
    }
    DFS(0, 0, 0);
    return answer;
}

console.log(solution([81, 58, 42, 33, 61], 259)) // 242