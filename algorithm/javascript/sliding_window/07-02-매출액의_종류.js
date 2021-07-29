// /*
//     연속된 K일 매출액 종류. 구간 별로 구하고 개수.
// */

// function solution(nums, k) {
//     let tmp = [];
//     let tmp2;
//     let result = [];
//     let cnt = 0;

//     for(let i=0; i<k; i++) {            // 1. 기본 k개로 이루어진 배열 만들었다.
//         tmp.push(nums[i]);
//     }
//     tmp2 = Array.from(new Set(tmp));     // 2. 중복 제외하고 개수 세서 result에 넣었다.
//     cnt = tmp2.length;
//     result.push(cnt)

//     for(let i=k; i<nums.length; i++) {  // 2. index가 k번째부터 끝까지 간다.
//         tmp.shift();
//         tmp.push(nums[i]);
//         tmp2 = Array.from(new Set(tmp));
//         cnt = tmp2.length;
//         result.push(cnt)
//     }
//     return result;
// }

// console.log(solution([20, 12, 20, 10, 23, 17, 10], 4))



// 강의
/*
    연속된 K일 매출액 종류. 구간 별로 구하고 개수.
    ❗️ 중요한건 lt, rt는 인덱스 번호다.
    ❗️ 아래 문제 틀렸다. 뭐가틀린지 나중에 확인하자. (스샷찍어놓음)
*/

function solution(nums, k) {
    const nH = new Map();
    let answer = [];
    let lt = 0;

    for(let i=0; i<k-1; i++) {
        nH.set(nums[i], nH.get(nums[i])+1 || 1)
    }
    
    for(let rt=k-1; rt<nums.length; rt++) {
        nH.set(nums[rt], nH.get(nums[rt])+1 || 1);
        answer.push(nH.size);
        nH.set(nums[lt], nH.get(nums[lt])-1) // rt가 계속 추가하면서 가기때문에 or 1을 안해도 된다.
        // 키가 살아있으면(value가 0일 때) 키를 지워야 한다.
        if(nH.get(nums[lt])===0) nH.delete(nums[lt]);
        lt++; // 쫓아가야 한다.
    }
    return answer;
}

console.log(solution([20, 12, 20, 10, 23, 17, 10], 4))