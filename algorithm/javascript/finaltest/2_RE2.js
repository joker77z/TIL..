function solution(nums) {
    let answer = [];
    let stack = [nums[0]];
    console.log(stack)
    for(let i=1; i<nums.length; i++) {
        let num = nums[i];
        let lt = 0;
        while(lt<=stack.length) {
            if(stack[stack.length-1]<0 && num<0) {
                stack.push
            }

            if(nums[lt]>0 && nums[lt+1]<0) {
                // 더 큰 것이 남고 작은 것은 사라진다.
                if(nums[lt]>nums[lt+1]) nums.splice(lt+1, 1);
                else nums.splice(lt, 1)
            }

            if(Math.abs(nums[lt]) === Math.abs(nums[lt+1])) {
                nums.splice(lt, 2)
            }
            lt++;
        }
    }
    return answer;
}

// console.log(solution([3, 5, -2, -5])); // [3]
// console.log(solution([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
console.log(solution([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]