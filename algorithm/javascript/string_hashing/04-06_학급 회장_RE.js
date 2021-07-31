/*
    7.31(토)
    23:55 ~ 24:02
    
    ‣ 문제
    학급 회장을 뽑는다. 기호 A, B, C, D, E 후보가 등록했다.
    투표용지에는 각 후보의 기호가 써있고 선생님은 발표.
    발표가 끝난 뒤 어떤 호부가 회장 됬는지 출력.

    ‣ 해설
    1. 번호표 하나씩 개수를 센다.
    2. max 변수를 생성해놓고

    ‣ 깨달은 점
    new Map() 에 대해 다루는 방법을 배웠다.
    >> sH.set으로 각 타입별로 수량을 기록하고. for(key, value of sH) 로 하나씩 받는데 가장 큰 수를 만들어야 한다면
    key와 value가 1번씩 같이 내려오기 때문에 가장 큰 수를 뽑으려면 max값과 answer을 갱신해나가면서 가장 큰 value값일 때 마지막으로 저장됬던 answer가 출력.
    
*/

function solution(s) {
    const sH = new Map();
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let x of s) {
        sH.set(x, sH.get(x)+1 || 1);
    }

    for(let [key, value] of sH) {
        let tmp = value;
        if(max<tmp) {
            answer = key;
            max = tmp;
        }
    }

    return answer;
}

console.log(solution("BACBACCACCBDEDE")) // C