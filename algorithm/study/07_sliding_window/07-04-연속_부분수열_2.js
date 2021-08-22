/*
    연속으로 더하는 숫자가 k가 되는 경우 몇번인지.
*/
"use strict"

// function solution(nums, k) {
//     let stack = [];
//     let cnt = 0;
//     let sum = 0;

//     for(let i =0; i<nums.length; i++) {
//         stack.push(nums[i]);
//         sum = nums[i];
//         if(sum === k) {
//             cnt++;
//         }
//         for(let j=i+1; j<nums.length; j++) {
//             stack.push(nums[j]);
//             sum += nums[j]
//             if(sum === k) {
//                 cnt++;
//             }
//         }
//         console.log(stack, sum, cnt)
//         stack = [];
//         sum = 0;
//     }
//     return cnt
// }

// console.log(solution([-1, -1, -1, 1], 0))



// 강의
// 이 문제는 lt, rt하면 안된다.
// hashmap을 사용한다.

// function solution(nums, k) {
//     let nH = new Map();
//     let sum = 0;

//     for(let i=0; i<nums.length; i++) {
//         sum += nums[i];

//         nH.set(nums[i], nH.get(nums[i])+1 || 1);
//         console.log(nH)
//     }
// }

// console.log(solution([1, 1, -1, 1, 2, 1, -1, 1], 4))
// // console.log(solution([1, 2, 3, -3, 1, 2], 3))


// 강사님
function solution(nums, m) {
    let answer = 0;
    let sum = 0;
    let nH = new Map();

    for(let i=0; i<nums.length; i++) {
        sum+=nums[i];
        if(sum===m) answer++; // 이건 그냥 0번 인덱스부터 더해서 m인지 확인.
        if(nH.has(sum-m)) {// 이런 키값이 있는지 보는 것.
            console.log('-------------')
            console.log(nH.get(sum-m))
            console.log('-------------')
            answer += nH.get(sum-m);
        }
        nH.set(sum, nH.get(sum)+1 || 1);
        console.log(nH)
        console.log(`✨ answer : ${answer}`)
    }
    return answer;
}

// console.log(solution([1, 1, -1, 1, 2, 1, -1, 1], 4))
console.log(solution([1, 2, 3, -3, 1, 2], 3))