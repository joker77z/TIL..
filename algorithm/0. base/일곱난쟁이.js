function solution(nums) {
    let n = nums.length;
    let sum = nums.reduce((arr, el) => {
        return arr+el;
    }, 0)
    console.log(sum)
    for(let i=0; i<n-1; i++) {
        for(let j=i+1; j<n; j++) {
            if((sum-(nums[i]+nums[j])) === 100) {
                nums.splice(j, 1);
                nums.splice(i, 1);
            }
        }
    }
    return nums;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));