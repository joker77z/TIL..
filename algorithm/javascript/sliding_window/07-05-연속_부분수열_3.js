/*
    연속으로 더하는 숫자가 k가 되는 경우 몇번인지.
*/

// 강의
// lt, rt 첫번째에 두고 
// answer += rt-lt+1 누적을 이렇게 해야 된다.
// answer += (0 -0 + 1) >>>>> 1. 1개

// if랑 상관없이 for문 돌때마다 무조건 한다.
// rt가 증가해서
// 1+3 더하고
// answer += (1 - 0 + 1) >>>>>>> 2..

//    3
// 1, 3

// rt가 또 증가. rt가 인덱스2
// answer 계산또해서 3. 1이 5이하의 마지막 항인.
//       1
//     3 1
//   1 3 1


// rt가 또 증가. rt가 인덱스 3.
// answer 계산또해서 7.

// rt가 가리키는 값을 sum에 더하고나서
// 연산을 하고 >>>>>>>>>>>> while문 sum이 n보다 크면 계속 돈다. lt가 쫓아온다.
// while문 탈출하고 answer 계산을 한다. >>>>>>>>> 2
//    2
//  1 2



// function solution(nums, m) {
//     let lt = nums[0];
//     let answer = 0;
//     let sum = 0;

//     for(let rt=0; rt<nums.length; rt++) {
//         sum += nums[rt];
//         answer = rt-lt+1;
        
//     }
// }

// console.log(solution([1, 3, 1, 2, 3], 5))


// 강사님
// 투 포인트는 단골이다. 프론트엔드에서 단골.
function solution(nums, m) {
    let lt = nums[0];
    let answer = 0;
    let sum = 0;

    for(let rt=0; rt<nums.length; rt++) {
        sum += nums[rt];
        // sum이 m보다 커버리면 이제 sum을 빼줘야 된다.
        while(sum>m) { // m이하. 
            sum -= nums[lt++]; // sum에서 nums[lt]뺴고 lt증가.
        }
        answer += (rt-lt+1); // 이 부분은 자기가 계산해서 맞다 생각하는 식을 써도 된다.
    }
    return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5))