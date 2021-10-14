function solution(nums, target) {
    let TMPMAX = 0;
    nums.sort((a, b) => a - b);
    console.log(nums)
    let lt = 0;
    let rt = nums.length - 1;

    while (lt <= rt) {
        TMPMAX++;
        if (TMPMAX === 10) break;
        //--------------------

        let mid = parseInt((rt + lt) / 2);
        console.log(mid)
        if (nums[mid] === target) {
            return mid + 1;
        }
        if (nums[mid] > target) {
            rt = mid - 1;
        }
        if (nums[mid] < target) {
            lt = mid + 1;
        }
    }
}
console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));