function solution(s) {
    let answer = "";
    let stack = [];
    for (let x of s) {
        if (x !== ')') stack.push(x);
        else {
            console.log(stack)
            let tmp = "";
            while (stack.length) {
                let c = stack.pop();
                console.log(c)
                if (c === '(') {
                    let num = "";
                    while (stack.length && !isNaN(stack[stack.length - 1])) {
                        num = stack.pop() + num;
                        console.log(num)
                    }
                    stack.push(tmp.repeat(Number(num)));
                    break;
                } else {
                    console.log(c)
                    tmp = c + tmp;
                    console.log(tmp)
                }
            }
        }
    }
    answer = stack.join('');
    return answer;
}
// console.log(solution("aabb3(3(a)b)"));
console.log(solution("3(a2(b))ef"));