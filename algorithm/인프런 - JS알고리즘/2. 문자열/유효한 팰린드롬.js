/*
    앞에서 읽을 때나 뒤에서 읽을 때가 같다.
    같으면 "YES", 아니면 "NO"
    - 대소문자 구분X
    - 알파벳 이외 문자 무시.
*/

function solution(s) {
    let ans = "YES";
    s = s.replace(/[~!@#$%^&*()_+|<>?:;{}]/gi, "").replace(/ /g, "").toLowerCase().trim();
    let mid = s.length/2;
    for(let i=0; i<mid; i++) {
        if(s[i] !== s[s.length-i-1]) {
            console.log(s[i], s[s.length-i-1])
            ans = "NO"
        }
    }
    return ans;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof")) // YES

function solutionB(s) {
    let ans = "YES";
    s = s.toLowerCase().replace(/[^a-z]/g, "");
    if(s.split('').reverse().join('') !== s) {
        ans = "NO"
    }
    return ans;
}

console.log(solutionB("found7, time: study; Yduts; emit, 7Dnuof")) // YES