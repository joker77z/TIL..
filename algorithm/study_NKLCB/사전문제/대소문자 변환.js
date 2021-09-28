// 대문자는 소문자, 소문자는 대문자로
function solution(str) {
    let answer = "";
    for (let x of str) {
        if (x === x.toLowerCase()) {
            answer += x.toUpperCase();
        } else {
            answer += x.toLowerCase();
        }
    }
    return answer;
}
console.log(solution("StuDY"));