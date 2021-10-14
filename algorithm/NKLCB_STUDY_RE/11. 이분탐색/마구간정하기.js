function solution(nums, target) {
    nums.sort((a, b) => a - b);
    let lt = nums[1] - nums[0];
    let rt = nums[nums.length - 1] - nums[0];
    let answer = 0;
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        let cnt = 1;
        let s = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (s + mid < nums[i]) {
                cnt++;
                s = nums[i];
            }
        }
        console.log(cnt)
        if (cnt < target) {
            answer = mid;
            console.log(answer)
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}
console.log(solution([1, 2, 8, 4, 9], 3));
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));