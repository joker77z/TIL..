/*
    가위바위보 이긴사람 출력
    가위 바위 보
     1   2  3

    A : [2, 3, 3, 1, 3]
    B : [1, 1, 2, 2, 3]
         A  B  A  B  D
    
    Pseudo code
    핵심 : A가 이기는 경우 조건들을 만들고, B가 지는 조건은 else로 구분한다.

    for(i=0 ~ i<a.length)
        if(a[i] === b[i]) answer += 'D'
        else if(a[i]===1 && b[i]===3) answer += 'A'
        else if(a[i]===2 && b[i]===1) answer += 'A'
        else if(a[i]===3 && b[i]===2) answer += 'A'
        else answer += 'B'
*/

function solution(a, b) {
    let answer = '';
    for(let i=0; i<a.length; i++) {
        if(a[i] === b[i]) answer += 'D';
        else if(a[i]===1 && b[i]===3) answer += 'A';
        else if(a[i]===2 && b[i]===1) answer += 'A';
        else if(a[i]===3 && b[i]===2) answer += 'A';
        else answer += 'B';
    }
    return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]))