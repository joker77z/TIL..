
function solution(s) {
    let answer = 0;
    let pos = s.indexOf(s[0]);
    while(pos !== -1) {
        answer++;
        pos = s.indexOf(s[0], pos+1)
    }
    return answer;
}

console.log(solution("ksekkset"))