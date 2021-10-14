/*
    문자열 압축
*/

function solution(string) {
    let stack = [];
    let answer = "";
    for (let x of string) {
        // 닫는 괄호일 때
        if (x === ")") {
            let tmp = "";
            while (stack.length) {
                let s = stack.pop();
                console.log(s)
                if (s === '(') {
                    let num = "";
                    num = stack.pop();
                    console.log(num)
                    stack.push(tmp.repeat(num))
                    break;
                } else {
                    tmp = s + tmp;
                    console.log(tmp)
                }
            }
        }
        // 닫는 괄호가 아닐 때
        else {
            stack.push(x);
        }
    }
    return stack.join('');
}
// console.log(solution("2(ab)k3(bc)"));
console.log(solution("3(a2(b))ef"));