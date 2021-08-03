// 조합 9-9
// 9-11

// 문제
/*
    팀전으로 치뤄지는 바둑대회에 참가.
    N(짝수)명이 출전해서 흰 돌로 출전하는 선수 N/2명, 검은 돌로 출전하는 선수 N/2명해서 총 N명

    한 선수는 흰돌의 선수로 나가던지, 검은돌 선수로 나각던지.

    최상이 선택이란 흰돌팀과 검은돌팀의 능력차가 최소가 되게.
    흰돌팀의 능력치는 흰돌팀 N/2명 선수들의 흰돌로 했을 때 총합.
    검은팀 차나가지.


    - 입력
    매개변수 nums에 인원수 N명 
    [흰돌 능력치, 검은돌 능력치]

    - 출력
    흰돌팀과 검은돌팀의 능력차 최소값.

*/

function solution(nums) {
    const n = nums.length; // 6
    let answer = 0;
    // let dy = Array.from(Array(n+1), ()=> Array(n+1).fill(0));
    let max_wsum = 0;
    let max_bsum = 0;

    function DFS(n, r, s, wsum, bsum) {
        if(n===r || r===0) {
            console.log(wsum - bsum, bsum - wsum)
            
            // 흰색 돌과 검은색 돌의 차이 중 최소값

            // let tmp = wsum-bsum;
            // answer = Math.min(tmp ,answer)
            
            // max_wsum = Math.max(wsum, max_wsum)
            // max_bsum = Math.max(bsum, max_bsum)
            // if(max_wsum > max_bsum) {
            //     let tmp = max_wsum-max_bsum;
            //     answer = Math.min(answer, tmp)
            // }
            // else {
            //     let tmp = max_bsum-max_wsum
            //     answer = Math.min(answer, tmp)
            // }
        }
        else {
            for(let i=s; i<n; i++) {
                DFS(n-1, r-1, i+1, wsum+nums[i][0], bsum)
                DFS(n-1, r, i+1, wsum, bsum+nums[i][1])
            }
        }
    }

    DFS(6, 3, 0, 0, 0)
    return answer;
}

let arr = [[87, 84], [66, 78], [94, 94], [93, 87], [72, 92], [78, 63]];
console.log(solution(arr))