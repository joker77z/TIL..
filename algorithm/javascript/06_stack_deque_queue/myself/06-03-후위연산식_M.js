function solution(s) {
    let answer = 0;
    let stack = [];
    
    for(x of s) {
        if(!isNaN(x)) {// 숫자면
            stack.push(Number(x));
        } else {
            if(x === '*') {
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b*a);
            }
            if(x === '+') {
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b+a);
            }
            if(x === '-') {
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b-a);
            }
        }
        console.log(stack)
    }
    answer = stack.join('');
    return answer;
}

console.log(solution("352+*9-")) // 12