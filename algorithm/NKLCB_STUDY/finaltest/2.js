function solution(nums) {
    let stack = [nums[0]];
    let flag = true;
    let i = 1+1
    while(flag) {
        console.log(stack, i)
        flag = false;
        // 1. nums[1]이 nums[0]과 절대값이 같으면 pop
        if(Math.abs(stack[stack.length-1]) === Math.abs(nums[i])) {
            stack.pop();
            flag = true;
        }
        console.log(stack, i)
        // 2. nums[1]이 양수 일 때 
        if(nums[i]>0) {
            stack.push(nums[i]);
            flag = true;
        }
        console.log(stack, i)
        // 3. nums[1]이 그냥 음수지만 이전 것도 음수일 때 그냥 넣는다.
        if(nums[i]<0 && stack[stack.length-1]<0) {
            stack.push(nums[i]);
            flag = true;
        }
        console.log(stack, i)
        // 4. nums[1]이 음수지만 이전 것이 양수다.
        if(nums[i]<0 && stack[stack.length-1]>0) {
            // 4-1. 만약 nums[i]가 더 크면 stack.pop하고 stack.push하고
            if(nums[i] > stack[stack.length-1]) {
                stack.pop()
                stack.push(nums[i]);
                flag = true;
            }
            // 4-2. 만약 이번에 넣는 것이 더 작으면 그냥 pass(구현x)
        }
        console.log(stack, i)
        i++;
    }
    return stack;
}

// console.log(solution([3, 5, -2, -5])); // [3]
// console.log(solution([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
// console.log(solution([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]