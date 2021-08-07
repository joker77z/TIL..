function solution(nums, m) {
    for(let i=0; i<m; i++) { // m 개수만큼 반복한다.
        for(let j=0; j<nums.length-1; j++) { // 다음 nums와 비교하며 빼준다.
            nums[j] = nums[j+1] - nums[j];
        }
        // 제일 뒤 한 개를 잘라낸다.
        // nums.pop();
        // pop말고 다른 방법 사용해보자.
        nums.splice(nums.length-1, 1)
    }
    return nums;
}

console.log(solution([5, 3, 7, 9, -2], 2))