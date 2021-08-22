function solution(nums) {
    let answer = [];
    let n = nums.length;
    for(let i=0; i<n; i++) {
        let min = nums[i][0];
        let pos = 0;
        for(let j=0; j<n; j++) {
            if(nums[i][j] < min) {
                min = nums[i][j];
                pos = j;
            }
        }
        let row;
        for(row=0; row<n; row++) {
            if(nums[row][pos] < min) break;
        }
        if(n === row) answer.push(min);
    }
    answer.sort((a,b) => a-b);
    return answer;
}

console.log(solution([[4, 6, 22, 1], [9, 3, 10, 12], [30, 7, 20, 2], [15, 8, 5, 13]]))