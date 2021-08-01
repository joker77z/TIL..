/*
    연속된 문자 지우기
    
    이웃한 두 문자 같으면 제거. 반복해서 최종남는 문자 출력.
*/

// function solution(data) {
//     data = data.split('');
//     let flag = false;
//     const n = data.length;
//     let i = 0;
//     let answer = [];

//     while(!flag) { // 더이상 반복되는게 없을 때까지
//         if(data[i] !== data[i+1]) {
            
//         }
//     }
// }

// console.log(solution("acbbcaa"))


// 강의 ==============================
// 스택이 비어있으면 무조건 넣는다.
// 그다음을 넣을 때 스택의 상단과 같은지 본다. 같지 않으면 스택에 들어간다.
// 안에 이미 있으면 지운다.

// 강사님 말만 듣고 내가 짠 코드
// function solution(data) {
//     let n =data.length;
//     let stack = [];

//     for(let i=0; i<n; i++) {
//         if(stack.length === 0) { // 비어있으면 푸쉬
//             stack.push(data[i])
//         } else { // 비어있지 않을 때
//             if(stack.includes(data[i])) { // stack에 똑같으면
//                 stack.pop();
//             }else { // stack에 똑같지 않으면
//                 stack.push(data[i])
//             }
//         }
//     }
//     return stack.join('');
// }

// console.log(solution("acbbcaa"))

// 강사님 코드 약간 참고버전.
function solution(data) {
    let n = data.length;
    let stack = [];

    for(let i=0; i<n; i++) {
        if(stack.length === 0) { // 비어있으면 푸쉬
            stack.push(data[i])
        } else { // 비어있지 않을 때
            if(stack[stack.length-1] === data[i]) { // stack에 똑같으면
                stack.pop();
            }else { // stack에 똑같지 않으면
                stack.push(data[i])
            }
        }
    }
    return stack.join('');
}

console.log(solution("acbbcaa"))