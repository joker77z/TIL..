function solution(nums) {
    let answer = [];
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for(x of nums) {
        if(x%2===1) {
            sum += x;
            if(min>x) {
                min = x;
            }
        }
    }
    answer.push(sum, min);
    return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]))