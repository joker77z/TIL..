// 
function solution(nums) {
    let answer = 0;
    let dy = Array.from({length:nums.length}, () => 0);
    dy[0] = 1;
    for(let i=1; i<nums.length; i++) {
        let max = 0;

        for(let j=i-1; j>=0; j--) { 
            // dy가 i에서 j하나씩 내려가면서 nums[i]가 nums[j]보다 크면서 
            if(nums[i]>nums[j] && dy[j]>max) {
                max = dy[j];
            }
        }
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }


    return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])) // 4
