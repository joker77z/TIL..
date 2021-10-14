function solution(s) {
    let stack = [];
    let answer = "";

    for(let x of s) {
        if(x === ')') {
            // (이 부분을 만날 때까지 pop해줘. ( 이 부분도 pop.
            while(stack.pop()!=='('); // stack.pop하면서 그 값이 '('인지 비교.
        }
        else {
            stack.push(x);
        }
    }
    answer = stack.join('');
    return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")) // EFLM