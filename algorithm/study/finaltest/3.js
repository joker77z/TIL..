function solution(nums, k) {
    let answer=0;
    let lt=0;
    let sum = 0;

    for(let rt=0; rt<nums.length; rt++) {
        if(nums[rt] === 1) {
            sum+=nums[rt];        
        }
        if(nums[rt] === 0 && k>0) {
            k--;
            sum+=1;
        } else if (nums[rt] === 0 && k === 0) {
            break
        }
        console.log(sum, rt, k)
    }
}
console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2)) //9

