function solution(nums) {
    let answer = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        answer += Math.abs(nums[i] - (i + 1));
        console.log(answer);
    }

    if (answer > 1000000000) answer = -1;
    return answer;
}
console.log(solution([1, 2, 1]));