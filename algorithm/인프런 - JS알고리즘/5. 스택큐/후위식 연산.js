/*
    352+*9-

    3*(5+2)-9로 계산해서 값이 12가 나온다. 값을 return해라.

    PseudoCode
    연산기호를 만나면 앞에 두 수를 계산한다.
*/

function solution(data) {
    let answer = 0;
    let stack = [];
    for(let d of data) {
        // 숫자일 때 stack에 더한다.
        if(!isNaN(d)) stack.push(d); 
        
        // 숫자 아닐 때 stack에서 2개 빼서 연산한다.
        else {
            console.log(stack)
            let b = Number(stack.pop());
            let a = Number(stack.pop());

            // if-else 조건문으로 해보자.
            if(d === '+') stack.push(a+b);
            else if(d === '*') stack.push(a*b);
            else if(d === '-') stack.push(a-b);

            // 스위치로도 해보자. => 성공!
            // switch(d) {
            //     case '+': {
            //      stack.push(a+b);
            //      break;
            //     }
            //     case '*' : {
            //         stack.push(a*b);
            //         break;
            //     }
            //     case '-' : {
            //         stack.push(a-b);
            //         break;
            //     }
            // }
        }
    }
    answer = stack.join('');
    return answer;
} 
console.log(solution("352+*9-"));

