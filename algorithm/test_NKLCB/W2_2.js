/*
    충돌하는 수열
    
    
*/

function solution(nums) {
    let flag = true;
    while (flag) {
        console.log(nums)
        flag = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0 && nums[i - 1] > 0) {
                console.log(Math.abs(nums[i]))
                if (Math.abs(nums[i - 1]) !== Math.abs(nums[i])) {
                    console.log(Math.abs(nums[i]))
                    console.log(Math.abs(nums[i - 1]))
                    nums[i - 1] = Math.abs(nums[i - 1]) > Math.abs(nums[i]) ? nums[i - 1] : nums[i];
                    console.log(nums[i - 1])
                    nums.splice(i, 1)
                    console.log(Math.abs(nums[i]))
                    console.log(nums)
                    flag = true;
                    break;
                }
                if (Math.abs(nums[i - 1]) === Math.abs(nums[i])) {
                    nums.splice(i - 1, 2);
                    flag = true;
                    break;
                }
            }
        }
    }
    return nums;
}
// console.log(solution([3, 5, -2, -5]));
// console.log(solution([-2, -1, -3, 1, 3]));
console.log(solution([-2, -1, 2, 1, -3, 2]));