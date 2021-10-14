/*
    충돌하는 수열
    
    
*/

function solution(nums) {
    let flag = true;
    while (flag) {
        flag = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0 && nums[i - 1] > 0) {
                if (Math.abs(nums[i - 1]) !== Math.abs(nums[i])) {
                    nums[i - 1] = Math.abs(nums[i - 1]) > Math.abs(nums[i]) ? nums[i - 1] : nums[i];
                    nums.splice(i, 1)
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

function solution(nums) {
    let answer = [];
    let stack = [],
        flag;
    for (let x of nums) {
        if (x > 0) stack.push(x);
        else {
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(x);
            } else {
                flag = 0;
                while (stack.length > 0 && stack[stack.length - 1] > 0) {
                    let left = stack.pop();
                    if (Math.abs(left) < Math.abs(x)) {
                        flag = 1;
                    } else if (Math.abs(left) === Math.abs(x)) {
                        flag = 0;
                        break;
                    } else {
                        stack.push(left);
                        flag = 0;
                        break;
                    }
                }
                if (flag) stack.push(x);
            }
        }
    }
    answer = stack;
    return answer;
}