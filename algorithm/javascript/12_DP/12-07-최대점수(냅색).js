function solution(nums, m) {
    let answer = 0;
    let dy=Array.from({length:m+1}, ()=>0);
    for(let i=0; i<nums.length; i++){
        let ps=nums[i][0];
        let pt=nums[i][1];
        for(let j=m; j>=pt; j--){
            dy[j]=Math.max(dy[j], dy[j-pt]+ps);
        }
    }
    answer=dy[m];
    return answer;
}

console.log(solution([[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20)) // 41