/*
    음의 정수는 왼쪽에 양의 정수는 우측에.
    동시에 양의정수와 음의정수는 순서에 변함이 없어야 한다.

    예시
    1 2 3 -3 -2 5 6 -6

    -3 -2 -6 1 2 3 5 6

    선택정렬, 버블정렬을 배운상태에서 무엇을 결정할것인가.
    순서를 유지하면서 음수를 좌측에 옮겨야 한다.
    눈으로 볼 때는 선택정렬이 좋아보인다. 선택정렬로 한다.

    PseudoCode
*/

// 이중 for문으로 음수값이면 answer에 push하고 양수인 것을 push해서 쉽게 구할 수 있지만
// 공부를 위해 그렇게 안한다.

function solution(nums) {
    for(let i=0; i<nums.length; i++) {
        let idx = i;
        for(let j=i+1; j<nums.length; j++) {
            if(nums[j]<0) {
                idx = j;
                break;
            }
            if(nums[j]>0 && nums[j]<nums[idx]) {
                idx = j;
            }
        }
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
        console.log(nums)
    }
    console.log(nums)
} 
console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));


// 강의 : 버블정렬로 구한다.
// 우측이 음수고 좌측이 양수면 바꾸는 식으로.

function solutionB(nums) {
    for(let i=0; i<nums.length-1; i++) {
        for(let j=0; j<nums.length-i-1; j++) {
            if(nums[j]>0 && nums[j+1]<0) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }
    }
    console.log(nums)
} 
console.log(solutionB([1, 2, 3, -3, -2, 5, 6, -6]));