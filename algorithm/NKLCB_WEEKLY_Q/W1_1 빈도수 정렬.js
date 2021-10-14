/*
    문자열. 빈도수 계산해서 빈도수 가장 큰 문자부터 출력.
    대소문자 구별.

    빈도수 내림차순.
    빈도수가 같으면 대문자가 소문자보다 우선
    대문자는 알파벳 순

    빈도수가 같을 경우 아스키번호 오름차순.
    문자열.charCodeAt()

    PseudoCode
    문자를 하나씩 받으면서 map에 넣고
    
    만약 value가 같다면 key를 charcodeat으로 오름차순 출력
    key가 아니라 value기준으로 내림차순으로 출력

*/

function solution(string) {
    let sH = new Map();
    let answer = "";
    for (let x of string) {
        sH.set(x, sH.get(x) + 1 || 1);
    }
    console.log(sH)
    sH = [...sH];
    console.log(sH)
    sH.sort((a, b) => {
        if (a[1] === b[1]) return a[0].charCodeAt() - b[0].charCodeAt();
        else return b[1] - a[1];
    })
    // for (let [a, b] of sH) {
    //     for (let i = 0; i < b; i++) {
    //         answer += a;
    //     }
    // }
    // return sH;
    for (let [key, val] of sH) {
        answer += key.repeat(val);
    }
    return answer;
}
console.log(solution("aaAAcccbbbBB"));
console.log(solution("kdkDKKGkdkgks"));