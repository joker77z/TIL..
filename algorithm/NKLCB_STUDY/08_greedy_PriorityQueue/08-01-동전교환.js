function solution(nums, m) {
    let answer=0;
    let sum=0;
    nums.sort((a, b) => b-a);
    // for(let i=nums.length-1; i>=0; i--) {
    for(let i=0; i<nums.length; i++) {
        answer += parseInt(m/nums[i]);
        m = m%nums[i];
        // sum += m%nums[i];
        // if(sum === m) {
        //     return answer;
        // }
    }
    return answer;
}

console.log(solution([1, 5, 10], 15))