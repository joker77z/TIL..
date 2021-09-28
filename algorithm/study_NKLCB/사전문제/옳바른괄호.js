/*
    옳바른 괄호 YES, 아니면 NO
*/


function solution(items) {
    let cnt = 0;
    for (let x of items) {
        if (x === '(') {
            cnt++;
        } else {
            cnt--;
        }
        console.log(cnt)
    }
    if (cnt !== 0) return "NO";
    return "YES";
}
console.log(solution('(()(()))(()'));
console.log(solution('()()'));