/*
    7.31(토)
    23:30 ~ 23:55
    
    ‣ 문제
    학급 회장을 뽑는다. 기호 A, B, C, D, E 후보가 등록했다.
    투표용지에는 각 후보의 기호가 써있고 선생님은 발표.
    발표가 끝난 뒤 어떤 호부가 회장 됬는지 출력.

    ‣ 해설
    1. 번호표 하나씩 개수를 센다.
    2. max 변수를 생성해놓고

    ‣ 깨달은 점
    new Map() 에 대해 다루는 방법을 배웠다.
*/

function solution(s) {
    const sH = new Map();
    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    for(x of s) {
        sH.set(x, sH.get(x)+1 || 1);
    }
    
    for(let [key, value] of sH) {
        let tmp = value;
        if(tmp > max) {
            answer = key;
            max = tmp;
        }
    }
    return answer;
}

console.log(solution("BACBACCACCBDEDE")) // C