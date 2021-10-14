/*
    문제맞추면 1점. 못맞추면 0점
    연속으로 맞추면 1점씩 증가.

    Pseudo Code
    sum = 0
    for(i=0 ~ i<nums.length)
        score
        if nums[i]가 1점이면 score+=1, sum+=score
        if nums[i]가 0점이면 score = 0
        
*/

function solution(nums) {
    let sum = 0;
    let score = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i]===1) {
            score+=1;
            sum+=score;
        } else {
            score=0;
        }
    }
    return sum;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))