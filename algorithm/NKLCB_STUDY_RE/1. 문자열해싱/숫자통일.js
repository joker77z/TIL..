/*
    0또는 1로 통일하는데 몇번만에 통일 가능한가?
*/
function solution(nums) {
    nums = nums.split('');
    let cntZero = 0;
    let cntOne = 0;
    let answer = Number.MAX_SAFE_INTEGER;

    nums[0] === 0 ? cntZero++ : cntOne++;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            console.log(nums[i - 1], nums[i])
            if (nums[i] === '0') {
                cntZero++;
            } else {
                cntOne++;
            }
        }
        answer = Math.min(cntOne, cntZero);
    }
    return answer;
}
// console.log(solution("100001111")); // 1
console.log(solution("10010111100")); // 3