function solution(s) {
    let max = Number.MIN_SAFE_INTEGER;
    let tmp = 0;
    let answer = "";
    for(let x of s) {
        max = s.length;
        // answer = Math.max(max, answer);
        if(tmp<max) {
            tmp = max;
            answer = x;
        }
    }
    return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]))