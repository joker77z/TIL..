// try 2

// function solution(nums, target) {
//     let answer;
//     let lt = Math.max(...nums);
//     let rt = nums.reduce((acc, curr) => acc += curr, 0);

//     while (lt <= rt) {
//         let mid = parseInt((lt + rt) / 2);

//         function counter(capa) {
//             let sum = 0;
//             let cnt = 1;
//             for (let i = 0; i < nums.length; i++) {
//                 if (sum + nums[i] > capa) {
//                     cnt++;
//                     sum = nums[i];
//                 } else {
//                     sum += nums[i];
//                 }
//             }
//             console.log(sum)
//             return cnt;
//         }

//         if (counter(mid) <= target) {
//             answer = mid;
//             rt = mid - 1;
//         } else {
//             lt = mid + 1;
//         }
//     }
//     return answer;
// }
// console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3));

// 실패
function solution(nums, target) {
    let lt = nums[nums.length - 1];
    let rt = nums.reduce((acc, cur) => acc + cur, 0);
    let answer = 0;
    let TMP = 0;
    while (lt <= rt) {
        // TMP++;
        // if (TMP === 5) break;


        let mid = parseInt((lt + rt) / 2);

        let sum = 0;
        let cnt = 1;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum > mid) {
                cnt++;
                sum = 0;
                i--;
            }
        }
        console.log(cnt)
        if (cnt <= target) {
            rt = mid - 1;
            answer = mid
        }
        if (cnt > target) {
            lt = mid + 1;
        }
        console.log(mid)
    }
    return answer;
}
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3));