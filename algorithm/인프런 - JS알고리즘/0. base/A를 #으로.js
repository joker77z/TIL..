
/*
    A를 모두 #으로 바꾸어 출력해라.
*/

function solution(s) {
    let answer = s;
    answer = answer.replace(/A/g, '#');
    return answer;
}

console.log(solution('BANANA'));