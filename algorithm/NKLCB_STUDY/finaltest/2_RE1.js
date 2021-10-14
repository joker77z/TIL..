function solution(nums) {
    let flag = true;
    let lt = 0;
    let rt = nums.length-1
    while(lt<=rt) {
        flag = false;
        // 1. nums[lt]이 양수일 때 그냥 넘어간다.
        // 2. nums[lt]이 양수일 때 바로 우측이 음수다.
        if(nums[lt]>0 && nums[lt+1]<0) {
            flag = true;
            // 더 큰 것이 남고 작은 것은 사라진다.
            if(nums[lt]>nums[lt+1]) nums.splice(lt+1, 1);
            else nums.splice(lt, 1)
        }

        // 3. 두 값의 절대값이 같다면
        if(Math.abs(nums[lt]) === Math.abs(nums[lt+1])) {
            nums.splice(lt, 2)
            flag = true;
        }
        lt++;
    }
    return nums
}

// console.log(solution([3, 5, -2, -5])); // [3]
// console.log(solution([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
console.log(solution([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]