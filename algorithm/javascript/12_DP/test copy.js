/*
마운틴 수열

마운틴 수열 : {10, 20, 30, 20, 10}과 {10, 20, 30, 40}, {35, 30, 20, 10} 
X : {1, 2, 3, 2, 1, 2, 3}과 {10, 20, 30, 40, 10, 20}

수열 A가 주어졌을 때. 그 수열의 부분 수열 중.
마운틴 수열이면서 가장 긴 수열의 길이.

*/

function solution(nums) {
    let answer = 0;
    let dy = Array.from({length:nums.length}, () => 0);
    let flag = false;
    for(let i=0; i<nums.length; i++) {
        // 상승하다가 내려가는 부분.
        
        for(let j=i-1; j>=0; j--) {
            if(nums[i-1]<nums[j] && nums[i]<nums[j]) {
                dy[i] = i
                flag= true;
            }
            if(nums[i]>nums[j]) { // nums[i]가 j보다 크다.
                dy[i] = dy[j];
                if(flag) dy[i] = dy[j]+1
            }
            if(nums[i]<nums[j]) { // 작아질 때
                dy[i] = dy[j];
                if(flag) dy[i] = dy[j]+1
            }
            console.log(`${nums[i]}, ${nums[j]}, ${dy[i]}`)
        }
        console.log(`${dy[i]}`)
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}

// console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); // 7
console.log(solution([5, 1, 2, 3, 2, 4, 1])); // 7
