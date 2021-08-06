function solution(nums) {
    let answer = [];
    let lt=0;
    let rt=1;

    while(rt<=nums.length) {
        if(Math.abs(nums[lt]) === Math.abs(nums[rt])){
            nums.splice(lt, rt+1)
        }
        if(nums[lt]>0 && nums[rt]<0) {
            // 더 큰 것이 남고 작은 것은 사라진다.
            if(Math.abs(nums[lt])>Math.abs(nums[rt])) nums.splice(rt, 1);
            else nums.splice(lt, 1)
        } else {
            lt++;
            rt++;
        }
        console.log(nums, lt, rt)
    }
    // 오른쪽에서 왼쪽으로도 검사
    lt = nums.length-2;
    rt = nums.length-1;
    while(rt>=0) {
        if(Math.abs(nums[lt]) === Math.abs(nums[rt])){
            nums.splice(lt, rt+1)
        }
        if(nums[lt]>0 && nums[rt]<0) {
            // 더 큰 것이 남고 작은 것은 사라진다.
            if(Math.abs(nums[lt])>Math.abs(nums[rt])) nums.splice(rt, 1);
            else nums.splice(lt, 1)
        } else {
            rt--;
            lt--;
        }
        console.log(nums, lt, rt)
    }

    return nums;
}

// console.log(solution([3, 5, -2, -5])); // [3]
// console.log(solution([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
// console.log(solution([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]