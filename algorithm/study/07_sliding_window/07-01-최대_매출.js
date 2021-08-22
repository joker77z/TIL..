// 내 풀이
// 맞았다.

// function solution(nums, k){
//     let sum = 0;
//     let tmp = 0;

//     for(let i=0; i<k; i++) {                // 1. K개수만큼 더한 것을 임시 tmp에 넣는다.
//         tmp += nums[i];
//     }

//     for(let i=k; i<nums.length; i++) {     // 2. tmp값에서 좌 1개 값 빼주고 우 1개 값 더하면서 최대값 찾는다.
//         tmp = tmp - nums[i-k] + nums[i];
//         sum = Math.max(tmp, sum);
//     }
//     return sum;
// }

// console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));


// 수업===========================
function solution(nums, k){
    let answer, sum = 0;

    for(let i=0; i<k; i++) { // i<k : k개수만큼 더한다.
        sum += nums[i]
    }
    answer = sum; // answer 초기화. 별 의미없고 아래에서 비교해줄 값으로 사용.

    for(let i=k; i<nums.length; i++) {
        sum+=(nums[i] - nums[i-k]);
        answer = Math.max(answer, sum);
    }
    return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));