/*
    쇠막대기

    '()'는 반드시 레이저를 표현한다.
    쇠막대기 왼쪽끝은 '(' 오른쪽 끝은 ')'로 표현한다.

    잘려진 쇠막대기 총 개수 return

    PseudoCode
    
*/

function solution(brackets) {
    let answer = 0; // 다 잘린 쇠막대기 개수
    let cnt = 0
    for(let i=0; i<brackets.length; i++) {
        if(brackets[i]==='(' && brackets[i+1] === ')') {
            console.log(i)
            console.log(cnt);
            answer = answer + cnt;
            i++;
        }
        else {
            if(brackets[i] === '(') { // 열린 괄호
                cnt++;
            } else { // 닫힌 괄호
                answer = answer + 1;
                cnt--;
            }
        }
    }
    return answer;
} 
console.log(solution("()(((()())(())()))(())"));