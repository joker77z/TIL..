function solution(nums) {
    let stack = [];
    for(let i=1; i<nums.length; i++) {
        stack.push(nums[i] - stack.pop());
        console.log(`nums[i] : ${nums[i]} stack : ${stack}`)
    };
    return stack;
}

console.log(solution([5, 3, 7, 2, 9]))