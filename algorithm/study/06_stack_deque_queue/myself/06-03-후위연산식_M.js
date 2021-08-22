function solution(s) {
    let answer = 0;
    let stack = [];
    
    for(let x of s) {
        if(!isNaN(x)) {// 숫자면
            stack.push(Number(x));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            if(x === '*') stack.push(b*a);
            if(x === '+') stack.push(b+a);
            if(x === '-') stack.push(b-a);
        }
    }
    answer = stack.join('');
    return answer;
}

console.log(solution("352+*9-")) // 12