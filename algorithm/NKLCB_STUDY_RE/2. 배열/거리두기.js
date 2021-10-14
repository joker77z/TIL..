/*
    최대한 멀리 떨어지게 자리 선택.

    가장 가까운 사람과 최대 거리 반환.

    PseudoCode
    좌 -> 우 0일 때 ++되는 배열 하나 만들고

    우 -> 좌에서 올 때 ++되는 배열 만드는데 Math.min값 들어가게.

    Math.min(...answer)
*/

function solution(nums) {
    let answer = Array.from({
        length: nums.length
    }, () => -1);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            answer[i] = 1;
            while (nums[i + 1] === 0) {
                i++;
                answer[i] = answer[i - 1] + 1;
            }
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            answer[i] = 1;
            while (nums[i - 1] === 0) {
                i--;
                let tmp = answer[i + 1] + 1;
                answer[i] = Math.min(answer[i], tmp)
            }
        }
    }
    return answer = Math.max(...answer)
}
console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));