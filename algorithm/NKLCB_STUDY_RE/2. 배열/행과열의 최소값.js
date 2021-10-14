/*
    PseudoCode
    
*/

// pass
// function solution(nums) {
//     let tmp = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let tmpX = [];
//         let tmpY = [];
//         for (let j = 0; j < nums.length; j++) {
//             tmpX.push(nums[i][j]);
//             tmpY.push(nums[j][i]);
//         }
//         tmp = Math.min(...tmpX, ...tmpY);
//         console.log(tmp)
//     }
// }
// console.log(solution([
//     [4, 6, 22, 1],
//     [9, 3, 10, 12],
//     [30, 7, 20, 2],
//     [15, 8, 5, 13]
// ]));