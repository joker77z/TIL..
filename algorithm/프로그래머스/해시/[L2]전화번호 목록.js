/*
    3:15 ~ 

    접두어인 경우 false
    접두어 아니면 true
*/

// 정답
function solution(nums) {
    // let compareLength = nums[0].length;
    let nH = new Map();
    // for(let x of nums[0]) {
    //     nH.set(x, nH.get(x)+1||1);
    // }

    for(let i=0; i<nums.length; i++) {
        nH.set(nums[i], i)
    }
    console.log(nH)
    
    for(let i=0; i<nums.length; i++) {
        for(let j=1; j<nums[i].length; j++) {
            console.log(nums[i])
            if(nH.has(nums[i].substring(0, j))) {
                console.log(j)
                console.log(nums[i])
                console.log(nums[i].substring(0, j))
                return false;
            }
        }
    }
    return true;
} 
console.log(solution(["119", "97674223", "1195524421"])); // false
// console.log(solution(["123","456","789"]));
// console.log(solution(["12","123","1235","567","88"]));


// 가짜 답
// function solution(nums) {
//     let compareLength = nums[0].length;
    
//     for(let i=1; i<nums.length; i++) {
//         for(let j=0; j<compareLength; j++) {
//             if(nums[0][j] === nums[i][j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// } 
// console.log(solution(["119", "97674223", "1195524421"])); // false
// console.log(solution(["123","456","789"]));
// console.log(solution(["12","123","1235","567","88"]));


