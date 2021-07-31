/*
    7.31 22:00 ~ 22:52
    
    ‣ 문제
    문자열 s가 주어졌을 때 최대 문자 1개까지 지워서 회문문자열이 되면 "YES"
    그렇지 않으면 "NO"

    ‣ 예시
    - 입력 : abcbdcba 
    - 출력 : "YES"

    - 입력 : abcabbakcba
    - 출력 : "YES"

    ‣ 깨달은 점
    1. 배열 깊은 복사. 
    테스트 할 새로운 배열 = 깊은복사할 배열.slice()

    2. 문자열에서 일부분만 지울 수 있는 방법은 없다.
    => 일부분을 지우려면 배열로 변환하고 splice로 해당 부분 지운다.

    3. 
*/

function solution(s) {
    let n = s.length;
    s = s.split('');

    for(let i=0; i<n; i++) {
        for(let j=n-1; j>=0; j--) {
            if(s[i] !== s[j]) { 
                // 다른부분에서 앞에꺼 제거하고 같은지보고
                // 뒤에꺼 제거하고 같은지 본다.
                let tmp = s.slice(); // tmp 깊은 복사
                tmp.splice(i, 1);
                console.log(tmp.join(''))
                if(tmp.join('') === tmp.reverse().join('')) {
                    return "YES";
                } 
                tmp = s.slice();
                tmp.splice(j, 1);
                console.log(tmp.join(''))
                if(tmp.join('') === tmp.reverse().join('')) {
                    return "YES";
                } 
                return "NO";
            }
            i++;
        }
    }
    return "YES"
}

console.log(solution("abcbdcba"))
// console.log(solution("abcacbakcba"))
