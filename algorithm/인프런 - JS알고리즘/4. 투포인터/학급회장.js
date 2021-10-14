/*
    A, B, C, D, E 후보 등록.
    많이 표 나온 사람 당선
*/

function solution(s) {
    let sH = new Map();
    let answer = "";
    let min = Number.MIN_SAFE_INTEGER;
    for(let x of s) {
        sH.set(x, sH.get(x)+1 || 1);
    }
    for(let [key, value] of sH) {
        if(min<value) {
            min = value;
            answer = key;
        }
    }
    return answer;
}

console.log(solution("BACBACCACCBDEDE"))