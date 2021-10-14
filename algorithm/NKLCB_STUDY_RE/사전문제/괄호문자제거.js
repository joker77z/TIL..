/*
    괄호 사이 문자 모두 제거. 남은 문자만 출력
*/

// try1: 성공. 재밌게 품.
// function solution(string) {
//     let answer = [];
//     let cnt = 0;
//     for (let x of string) {
//         // 괄호 '('를 만났을 때
//         if (x === '(') {
//             ++cnt;
//         } else if (x === ')') {
//             cnt--;
//             continue;
//         }
//         // 괄호 안에가 아닐때
//         if (cnt === 0) {
//             answer.push(x);
//         }
//     }
//     return answer;
// }
// console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

// try2 : 정석으로 풀어보자. 성공!
function solution(string) {
    let stack = [];
    for (let x of string) {
        // let 
        stack.push(x);

        if (x === ')') {
            while (stack.length) {
                spop = stack.pop();
                if (spop === '(') {
                    break;
                }
            }
        }
        console.log(stack)
    }
    return stack.join('');
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));