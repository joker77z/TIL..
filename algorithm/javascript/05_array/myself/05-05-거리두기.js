function solution(nums) {
    let cnt = 0;
    let answer = 0;
    const n = nums.length;
    for(let i=0; i<n; i++) {
        if(nums[i] === 1) {
            nums[i] = 0;
            cnt = 0;
        } else {
            cnt++;
            nums[i] = cnt;
        }
    }
    console.log(nums)
    for(let i=n-1; i>=0; i--) {
        if(nums[i] === 0) {
            cnt = 0;
        } else {
            cnt++;
            nums[i] = Math.min(cnt, nums[i]);
        }
    }
    console.log(nums)
    answer = Math.max(...nums);
    return answer;
}

console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1])) // 2