// 연속으로 증가하거나 연속으로 감소. 가장 길이 긴 수열
// 개수  return

/*
    Pseudo Code
    for
        cnt = 0
        if 다음 것이 더 크다면
            while 다음것이 더 크다.
                cnt++
                i++
            answer = Math.max(cnt, answer);
        cnt = 0
        if 다음 것이 더 작다면
            while 다음 것이 더 작다.
                i++
                cnt++
        answer = Math.max(cnt, answer);
        
*/


// function solution(nums) {
//     let answer = 0;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] < nums[i + 1]) {
//             let tmp = nums[i];
//             while (nums[i] < nums[i + 1]) {
//                 i++;
//             }
//             tmp = nums[i + 1] - tmp
//             answer = Math.max(answer, tmp);
//         }
//         if (nums[i] > nums[i + 1]) {
//             let tmp = nums[i];
//             while (nums[i] > nums[i + 1]) {
//                 i++;
//             }
//             tmp = Math.abs(nums[i + 1] - tmp);
//             answer = Math.max(answer, tmp);
//         }
//     }
//     return answer;
// }
// console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2])); // 5
// console.log(solution([5, 2, 4, 7, 6, 3, 9, 10, 11])); // 8