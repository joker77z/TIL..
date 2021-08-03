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

    function DFS(L, s, wsum, bsum) {
        if(L===n/2) {
            let tmp = wsum-bsum;
            console.log(tmp)
            // answer = Math.min(Math.abs(tmp, answer))
            // console.log(answer)
            // if(wsum>bsum) {
            //     tmp = wsum-bsum;
            //     answer = Math.min(tmp, answer);
            // } else {
            //     tmp = bsum-wsum;
            //     answer = Math.min(tmp, answer);
            // }
        }
        else {
            // [87, 84]에서 87을 더하고 다음꺼.
            for(let i=s; i<n; i++) {
                // console.log(`i값은 ${i} L레벨은 ${L} wsum은 ${wsum} bsum은 ${bsum}, ${answer}`)
                DFS(L+1, i+1, nums[i][0]+wsum, bsum);
                DFS(L+1, i+1, wsum, nums[i][1]+bsum);
            }
        }
    }

    DFS(0, 0, 0, 0);
    return answer;
}

let arr = [[87, 84], [66, 78], [94, 94], [93, 87], [72, 92], [78, 63]];
console.log(solution(arr))