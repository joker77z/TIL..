/*
    소괄호 사이 모든 문자 제거.
    남은 문자만 출력해라.

    PseudoCode
    stack에 push한다
    닫는 괄호를 만났다. 여는괄호까지 지운다.

    flag = true;
    for(d of datas)
        if(d === ')')
            while(flag)) 
                stack.pop()
                if(stack[stack.length-1] === '(') flag = false;
            flag = true;
        stack.push(d)
*/

function solution(datas) {
    let answer = "";
    let flag = true;
    let stack = [];
    for(d of datas) {
        if(d === ')') {
            while(flag) {
                stack.pop();
                if(stack[stack.length-1] === '(') {
                    stack.pop();
                    flag = false;
                }
            }
            flag = true;
        }
        else {
            stack.push(d);
        }
    }
    answer = stack.join('');
    return answer;
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

function solutionB(datas) {
    let answer = "";
    let flag = true;
    let stack = [];
    for(d of datas) {
        if(d === ')') {
            while(stack.pop !== '(');
        }
        else {
            stack.push(d);
        }
    }
    answer = stack.join('');
    return answer;
}
console.log(solutionB("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));