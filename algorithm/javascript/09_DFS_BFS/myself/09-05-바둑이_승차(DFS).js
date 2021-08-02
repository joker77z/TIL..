/*
    8.1 
    10:55 ~ 11:10
    ❗️ 다음에 꼭 풀기

    모르는 부분
    ‣ 컷치는 부분?
    

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

*/  

function solution(nums, c) {
    let answer = Number.MIN_SAFE_INTEGER;
    //컷치기 위해 필요
    let total = nums.reduce((acc, cur) => acc+cur, 0);
    const n = nums.length;

    function DFS(L, sum, tsum) {
        //컷1. sum보다 넘어버리면 더 셀 가치가 없다. 가지 치기.
        if(sum>c) return;

        //컷2. 
        if(sum+(total-tsum) < answer) return;

        if(L===n) {
            if(sum<c) {
                answer = Math.max(sum, answer)
            }
        }
        else {
            DFS(L+1, sum+nums[L], tsum+nums[L]);
            DFS(L+1, sum, tsum+nums[L]);
        }
    }
    DFS(0, 0, 0)
    return answer;
}

console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379))