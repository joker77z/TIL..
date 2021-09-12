/*
    옳바른 괄호면 "YES", 아니면 "NO"

    PseudoCode
    '('를 만나면 push하고 ')'를 만나면 pop해서 마지막에 length가 0이 아니면 "NO"
*/

function solution(brackets) {
    let answer = "YES";
    let stack = [];
    for(let bracket of brackets) {
        if(bracket === '(') stack.push('(');
        else {
            if(stack.length===0) return "NO"; // POINT: 이 부분은 생각못했다! pop하려고 했는데 빼려는게 없다? 여는괄호가 없다는거!
            stack.pop('(');
        }
    }
    if(stack.length>0) { // POINT: 여는 괄호가 더 많을 때
        answer = "NO";
    }
    return answer;
} 
console.log(solution("(()(()))(()"));