/*
    8.3
    ‣ 문제
    N개의 정수. M개를 뽑아서 K의 배수인 개수는 몇개인지 출력.

    ‣ 예시
    입력 : [2, 4, 5, 8, 12], 3, 6
    출력 : 2

*/  

// 강의
function solution(nums, m, k) {
    let answer = 0;
    const n = nums.length;

    function DFS(L, s, sum) {
        if(L===m) {
            if(sum%k===0) answer++;
        }
        else {
            for(let i=s; i<n;i++) {
                DFS(L+1, i+1, sum+nums[i]);
            }
        }
    }

    DFS(0, 0, 0)
    return answer;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6))