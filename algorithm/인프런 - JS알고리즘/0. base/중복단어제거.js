
function solution(s) {
    let answer = [];
    answer = s.filter((v, i) => {
        if(i === s.indexOf(v)) return true;
    });
    return answer;
}

console.log(solution(["good", "time", "good", "time", "student"]));