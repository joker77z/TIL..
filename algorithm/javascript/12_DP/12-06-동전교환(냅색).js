/*
    인덱스 번호가 금액
    dy[i] : i원을 거슬러 줄 때 최소 동전 개수.

*/
// nums : 동전들
// m:거슬러줘야 하는 금액


function solution(nums, m) {
    let answer=0;
    let dy = Array.from({length:m+1}, ()=>1000);
    dy[0] = 0;
    for(let i=0; i<nums.length; i++) {
        for(let j=nums[i]; j<=m; j++) {
            dy[j]=Math.min(dy[j], dy[j-nums[i]]+1)
        }
    }
    answer = dy[m];
    return answer;
}

console.log(solution([1, 2, 5], 15)) // 3