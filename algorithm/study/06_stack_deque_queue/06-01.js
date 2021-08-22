/*
    올바른 괄호

    (())() => "YES"
    아니면 "NO"
*/

// function solution(data) {
//     let cnt = 0;
//     let answer = "YES";
//     // 배열로 바꿔준다.
//     data = data.split('');

//     // 괄호 데이터를 하나씩 받는다.
//     const n = data.length;
//     for(let i=0; i<n; i++) {
//         if(data.shift() === '(') {
//             cnt ++;
//         } else {
//             cnt --;
//         }
//         console.log(data, cnt)
//     }
//     if(cnt.length!== 0) {
//         answer = "NO";
//     }
//     return answer;
// }

// console.log(solution("(()(()))(()"))

// 강의
// 입력값에 괄호가 들어있으면 대부분 스택문제다.
// 금요일날 압축 풀어보기. 문자열 압축 풀어버리는 문제를 낼 것.

// 닫는 괄호가 더 많을 때
// 여는괄호 만나면 push
// 닫는괄호 만나면 stack.pop 꺼내려고 했는데 스택이 비어있다. return NO

// 여는 괄호가 더 많을 때 ((())
// 마지막에 남아있다. return NO

function solution(data) {
    let stack = [];
    let n = data.length;

    for(let i=0; i<n; i++) {
        if(data[i] === '(') {
            stack.push(data[i]);
        } else {
            if(stack.length === 0) return "NO";
            stack.pop();
            // if(stack) stack.pop();
            // else return "NO";
        }
    }
    if(stack.length>0) {
        return "NO";
    }
    return "YES";
}

console.log(solution("(()))"))