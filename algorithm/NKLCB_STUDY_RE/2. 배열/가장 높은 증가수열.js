/*
    Pseudo Code
    반복문 시작
        if 다음 요소가 더 크다.
            해당 요소를 저장
            while 다음 요소가 더 클 경우 계속진행
                i++
            compare = nums[i] - 저장했던 요소
            if 다음 요소가 더 작거나 같다면
                answer = Math.min(answer, compare)
                
*/

function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            let tmp = nums[i];
            console.log(tmp)
            while (nums[i] < nums[i + 1]) {
                i++;
            }
            let compare = nums[i] - tmp;
            console.log(compare)
            answer = Math.max(compare, answer)
        }
    }
    return answer;
}
console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11]));
console.log(solution([8, 12, 2, 3, 7, 6, 20, 3]));