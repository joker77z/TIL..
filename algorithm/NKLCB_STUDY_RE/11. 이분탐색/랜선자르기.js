function solution(nums, target) {
    let lt = 0;
    let rt = nums[0];
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        let tmp = 0;
        for (let i = 0; i < nums.length; i++) {
            tmp += parseInt(nums[i] / mid);
        }
        if (tmp === target) {
            return mid;
        }
        if (tmp < target) { // 쪼개는 개수를 늘리기 위해 mid를 낮춘다.
            rt = mid - 1;
        }
        if (tmp > target) {
            lt = mid + 1
        }
    }
}
console.log(solution([802, 743, 457, 539], 11));