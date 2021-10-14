/*
    회장 선출
    제일 많은 표를 얻은 회장A, B, C중 한명 return
*/

function solution(s) {
    const sH = new Map();
    let max = Number.MIN_SAFE_INTEGER; // 가장 큰 키를 찾기 위해.
    let max_man = '';
    for(x of s) {
        sH.set(x, sH.get(x)+1 || 1);
    }
    for(let [key, value] of sH) {
        if(max < value) {
            max = value;
            max_man = key;
        }
    }
    return max_man;
}

console.log(solution("BACBACCACCBDEDE"))
