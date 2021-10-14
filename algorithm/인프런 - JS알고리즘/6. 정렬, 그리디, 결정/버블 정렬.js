/*
    버블정렬

    - 바로 뒤에있는 수와 비교를 하면서 우측으로 쭉 간다.
    - 맨 뒤의 수가 제일 큰 것이 결정된다. 그 다음 바로 왼쪽것, 그다음은 또 바로 왼쪽것.
*/

function solution(nums) {
    for(let i=0; i<nums.length-1; i++) {
        for(let j=0; j<nums.length-i-1; j++) {
            if(nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
            console.log(nums)
        }
    }
    return nums;
} 
console.log(solution([13, 5, 11, 7, 23, 15]));