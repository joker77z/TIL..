/*
    대소문자 구분해서 두개 문자열이 아나그램인지 비교
    아나그램이면 YES

    Pseudo Code
    두 개 해쉬에 넣고 키와 값이 같은지 확인
*/
function solution(s1, s2) {
    let sH1 = new Map();
    let sH2 = new Map();
    let answer = "YES";

    for(let x of s1) {
        sH1.set(x, sH1.get(x)+1 || 1);
    }
    for(let x of s2) {
        sH2.set(x, sH2.get(x)+1 || 1);
    }
    for(let [key, value] of sH1) {
        // 해당 키를 sH2에는 가지고 있지 않다면?
        if(!sH2.has(key)) answer = "NO";
        // value이 동일한지.
        if(sH2.get(key) !== value) answer = "NO";
    }
    return answer;
}

// console.log(solution("abaCC", "Caaab")) // NO
console.log(solution("AbaAeCe", "baeeACA")) // YES