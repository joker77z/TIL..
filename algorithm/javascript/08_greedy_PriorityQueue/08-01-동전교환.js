function solution(nums, k) {
    nums.sort((a, b) => b-a)
    let sum = 0;

    for(let i=0; i<nums.length; i++) {
        sum += nums[i]
        if(sum === k) {
            return i+1;
        }
    }
}

console.log(solution([1, 5, 10], 15))