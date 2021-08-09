function solution(nums, m) {
    let answer = 0;
    let lt=0, rt=nums.length-1;
    nums.sort((a, b) => a-b);
    
    while(lt<=rt) {
        if(nums[lt]+nums[rt] <= m) {
            answer++;
            lt++;
            rt--;
        } else {
            answer++;
            rt--;
        }
    }
    return answer;
}

console.log(solution([90, 50, 70, 100, 60], 140)) // 3




// let lt = 0;
    // let sum = 0;
    // let cnt =0;

    // for(rt = nums.length; rt>=0; rt--) {
    //     sum = nums[lt] + nums[rt];
    //     if(sum === k) return cnt
    //     lt++;
    //     cnt++;
    // }