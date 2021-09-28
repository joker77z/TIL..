/*
    옳바른 괄호 만들기
*/

function solution(s) {
    let answer;
    let Q = new Set([s]);
    console.log(Q)
    while (Q.size) {
        const next = new Set();
        for (let x of Q) {
            if (isValid(x)) {
                let answer = [...Q].filter(isValid);
                console.log(answer)
                return answer[0] === "" ? 0 : answer.length;
            }
            for (let i = 0; i < x.length; i++) {
                next.add(x.slice(0, i) + x.slice(i + 1));
                console.log(next)
            }
        }
        Q = next;
    }
    return answer;
}

function isValid(str) {
    let cnt = 0;
    for (let ch of str) {
        if (ch === '(') cnt++;
        else if (ch === ')') cnt--;
        if (cnt < 0) return false;
    }
    return cnt === 0;
}
// console.log(solution(")("));
console.log(solution("()(()()"));