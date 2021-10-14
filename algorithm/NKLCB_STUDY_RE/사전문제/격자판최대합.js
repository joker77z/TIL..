function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        let tmpX = 0;
        let tmpY = 0;
        for (let j = 0; j < nums.length; j++) {
            tmpX += nums[i][j];
            tmpY += nums[j][i];
        }
        answer = Math.max(answer, tmpX, tmpY);
    }
    tmpX = 0;
    tmpY = 0;
    for (let i = 0; i < nums.length; i++) {
        tmpX += nums[i][i];
        tmpY += nums[i][nums.length - 1 - i];
        answer = Math.max(answer, tmpX, tmpY);
    }
    return answer;
}
console.log(solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
]));