function solution(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let lt = 0;
        let rt = nums[i].length - 1;
        while (lt <= rt) {
            let mid = parseInt((lt + rt) / 2);
            if (nums[i][mid] === target) return [i, mid];
            if (nums[i][mid] > target) rt = mid - 1;
            if (nums[i][mid] < target) lt = mid + 1;
        }
    }
}
console.log(solution([
    [1, 6, 9, 12],
    [3, 7, 10, 14],
    [5, 8, 13, 17],
    [15, 18, 20, 23]
], 8));