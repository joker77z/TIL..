function solution(s) {
    // stack 사용하기.
    let stack = [];
    let answer = "YES";

    for(let x of s) {
        if(x === '(') { // ( 일때 스택에 더한다.
            stack.push(x);   
        } else { // ) 일때 스택에서 뺀다. 만약 더이상 뺄 것이 없으면 "NO"
            if(stack.length===0) {
                return "NO";
            }
            stack.pop();
        }
    }
    // 남아있으면 "NO"
    if(stack.length>0) {
        return "NO";
    }

    return answer;
}

console.log(solution("(())"))
