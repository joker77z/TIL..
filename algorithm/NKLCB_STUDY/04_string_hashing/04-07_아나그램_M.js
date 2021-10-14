/*
    8.1(일)
    11:10 ~ 11:30
    ❗️ 나중에 다시보기
    
    ‣ 문제
    아나그램이란 두 문자열이 알파벳 나열 순서는 달라도 구성만 똑같으면 아나그램.
    대소문자 구분된다.

    ‣ 출력
    아나그램(두 문자열 구성이 같으면) "YES"
    아니면 "NO"

    ‣ 해설
    

    ‣ 깨달은 점
    ✅ 내가 알고 있는 내장함수들을 쭉 적어놓고 상황에 어떤것을 쓰면 좋을까 쭊 보는것도 나쁘지 않을 것 같다.
*/

// TRY1
function solution(s) {
    const [s1, s2] = s.split(', ');
    const sH1 = new Map();
    const sH2 = new Map();

    let answer = "YES";

    for (x of s1) {
        sH1.set(x, sH1.get(x) + 1 || 1);
    }

    for (x of s2) {
        sH2.set(x, sH2.get(x) + 1 || 1);
    }

    // console.log(sH1, sH2)
    let tmp1 = [];
    let tmp2 = [];
    for (let [key, value] of sH1) {
        tmp1.push([key, value]);
    }
    for (let [key, value] of sH2) {
        tmp2.push([key, value]);
    }
    tmp1.sort()
    tmp2.sort()
    console.log(tmp1, tmp2)
    if (JSON.stringify(tmp1) !== JSON.stringify(tmp2)) return "NO";

    return answer;
}



// TRY2



console.log(solution("AbaAeCe, baeeACA")) // YES
// console.log(solution("abaCC, Caaab")) // NO