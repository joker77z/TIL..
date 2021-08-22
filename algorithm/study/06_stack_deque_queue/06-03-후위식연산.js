/*
    후위식 연산
*/

// function solution(data) {
//     data = data.split('');
//     const n = data.length;
//     let answer = [];
//     let result = 0;

//     for (let i=0; i<n; i++) {
//         let tmp = data.shift();
//         if(!isNaN(tmp)){ // 숫자면
//             answer.push(tmp);
//         } else if (tmp === '+') { // 숫자가 아니고 연산자면
//             answer.push(parseInt(answer.pop()) + parseInt(answer.pop()))
//         } else if (tmp === '*') {            
//             answer.push(parseInt(answer.pop()) * parseInt(answer.pop()))
//         } else if (tmp === '-') {
//             let a = parseInt(answer.pop());
//             let b = parseInt(answer.pop());
            
//             answer.push(b-a)
//         } else if (tmp === '/') {
//             let a = parseInt(answer.pop());
//             let b = parseInt(answer.pop());
            
//             answer.push(b/a)
//         }
//     }
//     return parseInt(answer)
// }

// console.log(solution("352+*9-"))


// 강의 ==========================
// 면접볼 때 많이 한다. 중위식 -> 후위식 이런거 코드로 짜봐라 이런거.

/*
    굿노트에 전위 중위 후위라는 제목으로 작성함

    3, 5, 2 연달아서 push. +를 했을 때 pop2번. 
    먼저 나오는 애를 lt, 나중에 나오는 애가 rt.
    결과를 push.

    9만나니까 push.
    21-9.

    결과 스택에 남은거 stack[0] return.
*/

function solution(data) {
    let stack = [];
    const n = data.length;
    let answer;

    for(let x of data) {
        // 숫자면 stack에 push
        if(!isNaN(x)) stack.push(Number(x));

        // 숫자가 아니고 연산자면
        else {
            let lt = stack.pop();
            let rt = stack.pop();
            if(x === '+') stack.push(lt+rt);
            else if(x === '*') stack.push(lt*rt);
            else if(x === '-') stack.push(lt-rt);
            else if(x === '/') stack.push(lt/rt);
        }
    }
    answer = stack[0];
    return answer;
}

console.log(solution("352+*9-"))

/*
    후위식 연산

    
*/

// function solution(data) {
//     data = data.split('');
//     const n = data.length;
//     let answer = [];
//     let sum = 0;

//     for (let i=0; i<4; i++) {
//         let tmp = data.shift();
//         let result = 0;

//         if(!isNaN(tmp)){ // 숫자면
//             answer.push(tmp);
//         } else if (tmp === '+') { // 숫자가 아니고 연산자면
//             console.log(answer)
            
//             sum += parseInt(answer.pop())
//             sum += parseInt(answer.pop())
//             console.log(sum)
//         }
//     }
// }

// console.log(solution("352+*9-"))