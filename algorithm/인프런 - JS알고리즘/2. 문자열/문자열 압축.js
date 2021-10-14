/*
    문자가 연속으로 반복되는 경우
    문자 뒤에 반복되는 숫자를 써준다.

    Pseudo Code
    ans = ""
    s += ""
    cnt = 1
    for (i=0 ~ i<s.length-1)
        다음 요소와 비교한다. 같으면 cnt++
        다음 요소와 비교한다. 다르면
            해당 문자를 ans에 붙인다.
            cnt가 1초과했으면 ans에 붙인다.
    
    좀 더 신경써볼 포인트.
    s 마지막에 공백을 넣지 않아도 다음과 같지 않도록 처리되지만
    다른 언어라고 생각하고 공백을 줬다.
    그리고 String으로 num을 변화시켜주는 디테일도 있다.
*/
function solution(s) {
    let answer = "";
    s += " ";
    let cnt = 1;
    for(let i=0; i<s.length-1; i++) {
        if(s[i] === s[i+1]) {
            cnt++;
        } else {
            answer += s[i];
            if(cnt>1) answer += String(cnt);
            cnt = 1;
        }
    }
    return answer;
}

console.log(solution("KKHSSSSSSSE")) // K2HS7E