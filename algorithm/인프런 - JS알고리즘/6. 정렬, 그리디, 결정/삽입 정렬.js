/*
    삽입 정렬

    Pseudo Code
    i=1부터 시작해서 끝까지 순회한다.
        tmp = i
        let j
        j=i-1부터 j=0까지 순회한다.
            tmp보다 더 크면 nums[j+1] = nums[j]
            tmp보다 더 작으면 break;
        nums[j] = tmp
*/

function solution(nums) {
    for(let i=1; i<nums.length; i++) {
        let tmp = nums[i];
        let j;
        for(j=i-1; j>=0; j--) {
            if(tmp<nums[j]) { // 부호 반대로 하면 내림차순.
                nums[j+1] = nums[j];
            }
            else {
                break;
            }
        }
        nums[j+1] = tmp;
    }
    return nums;
} 
console.log(solution([11, 7, 5, 6, 10, 9])); // [5, 6, 7, 9, 10, 11]