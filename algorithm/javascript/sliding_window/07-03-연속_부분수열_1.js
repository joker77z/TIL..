/*
    연속 수열의 합이 k일 때가 몇번인지

    1. i = 0일 때 1+2+1+3. 즉 i가 3일때 k=6을 넘어간다. continue;
    2. i = 1일 때 2+1+3. if(i === 6) cnt++;
*/

// function solution(nums, k) {
//     let sum = 0;
//     let cnt = 0;
//     let stack = [];

//     if(nums.length>0) {
//         stack.push(nums[0])
//         sum = stack[0]
//     }

//     for(let i=1; i<nums.length; i++) {
//         stack.push(nums[i]);
//         sum += stack[stack.length-1];

//         if(sum>k) {
//             sum -= stack.shift();
//         }
//         if(sum === k) {
//             cnt += 1;
//         }
//         console.log(stack, sum)
//     }
//     return cnt
// }

// console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));


// 강의
// 내가 짠 코드.(미완성)
// function solution(nums, m) {
//     let lt = 0; // lt는 인덱스다.
//     let answer = 0;
//     let sum = 0;

//     for(let rt=0; rt<nums.length; rt++) {
//         sum += nums[rt];
//         if(sum === m) {
//             answer++;
//         }
//         if(sum > m) { // 초과해버렸다면
//             sum -= nums[lt++] // sum에서 lt부분을 빼주고 lt를 ++해서 증가시킨다.
//         }
//     }   
// }

// console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));

// 강사님이 짠 코드.
function solution(nums, m) {
    let answer =0, lt=0, sum=0;
    for(let rt=0; rt<nums.length; rt++) {
        sum+=nums[rt];
        if(sum===m) answer++;
        // 여기부터 중요!!!!!!!!!!!!!!!!
        while(sum>m) {// sum이 지금 m보다 크니까 앞에서 부터 계속 빼준다.
            sum -= nums[lt++];
            if(sum===m) answer++;
        }
    }
    return answer;
}

console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));