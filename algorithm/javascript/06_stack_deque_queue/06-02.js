/*
    괄호문자제거

    소괄호 사이 존재하는 모든 문자 제거,
    남은 문자만 출력.

    풀이
    ( 나오면 cnt++;
    ) 나오면 cnt--;
    하는 식으로 cnt가 0일 때 나오는 문자들을 더한다.
*/

// function solution(data) {
//     // 배열로 각자 쪼갠다.
//     data = data.split('');
//     let n = data.length;
//     // 변수 선언
//     let cnt = 0;
//     let result = [];

//     for(let i=0; i<n; i++) {
//         let tmp = data.shift();
//         if(tmp === '(') cnt++;
//         else if(tmp === ')') cnt--;
//         else if(cnt === 0) result.push(tmp);
//     }
//     return result
// }

// console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"))

// 강의
// 여는 괄호거나 문자면 stack에 push
// 닫는 괄호를 만났을 때 stack에 문자는 빼놓고 제일위에 있는 여는 괄호가 짝궁.
// 그 여는 괄호를 만날때까지 pop하다가 만나면 끝.
/*
    while(stack.pop()) // 꺼낸것을 리턴받은거다.
    while(stack.pop()!==('('))) // pop한게 여는 괄호일 때 거짓. 여는 괄호가 아니면 계속 pop pop pop
    즉, 짝궁 여는괄호까지 쭉 지우는거다.

*/

function solution(data) {
    let stack = [];
    
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"))