/*
    길이 축소 작업 거친 수열 반환.
*/

function solution(nums, count) {
    for (let i = 0; i < count; i++) {
        let tmp = [];
        for (let i = 0; i < nums.length - 1; i++) {
            tmp.push(nums[i + 1] - nums[i])
            console.log(tmp)
        }
        nums = [...tmp];
        console.log(nums)
    }
    return nums
}
// console.log(solution([5, 3, 7, 9, -2], 1));
console.log(solution([5, 3, 7, 9, -2], 2));