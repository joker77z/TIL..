/*
    8.1(일)
    11:30 ~ 11:55
    ❗️ 나중에 다시보기
    
    ‣ 문제
    아나그램이란 두 문자열이 알파벳 나열 순서는 달라도 구성만 똑같으면 아나그램.
    대소문자 구분된다.

    ‣ 출력
    아나그램(두 문자열 구성이 같으면) "YES"
    아니면 "NO"

    ‣ 해설
    

    ‣ 깨달은 점
    - map으로 만든 sH에서 다른 문자열에 포함된 것을 하나씩 카운팅하는 방법에 대해 알았다.
    sH.set(x, sH.get(x)-1).

    - 그리고 만약에 빼다가 0일때는 0이 되기전에 if(sH.get(x) === 0) 이미0인 상태라면 b에 있는 개수가 1개 더 많다는 소리니까 false를 해줘도 된다.

    - 가지고 있는지 확인할 때는 sH.has(x) 이런식으로 쓰면 된다.

    - 종합하면 가지고 있지 않거나 더이상 개수를 세려고 한다면 return "NO"
*/

function solution(s) {
    let answer = "YES";
    const [s1, s2] = s.split(', ')
    const sH = new Map();
    
    // 두 문자열 길이가 똑같지 않으면 "NO"
    if(s1.length !== s2.length) return "NO";
    
    for(x of s1) {
        sH.set(x, sH.get(x)+1 || 1);
    }
    let lt = 0
    let tmp = s2.slice();

    for(x of s2) {
        // 가지고 있지 않거나 1나씩 뺴주다가 0인상태인 것을 만났을 때 또 뺴려고 한다면 return "NO";
        if(!sH.has(x) || sH.get(x) === 0) {
            return "NO"
        }
        sH.set(x, sH.get(x)-1);
    }
    
    return answer;
}

// console.log(solution("AbaAeCe, baeeACA")) // YES
console.log(solution("abaCC, Caaab")) // NO