/*
    7.31(토)
    23:15 ~ 23:30
    
    ‣ 문제
    문자열 s가 주어졌을 때 최대 문자 1개까지 지워서 회문문자열이 되면 "YES"
    그렇지 않으면 "NO"

    ‣ 예시
    - 입력 : abcbdcba 
    - 출력 : "YES"

    - 입력 : abcabbakcba
    - 출력 : "YES"

    ‣ 깨달은 점
    1. split('').reverse().join() 이걸로 문자열 -> 배열 -> 뒤집고 다시 -> 문자열 이렇게 만들 수 있다.
    2. lt=0, rt=length-1 로 선언해놓고 while(lt<rt){ lt++ rt--} 를 이용해서 가운데를 넘어가면 끝나고 가운데까지 뭔가를 할 수 있다.
*/

function solution(s) {
    let answer = "YES";
    const n = s.length;
    let lt=0;
    let rt=s.length-1;

    while(lt<rt) {
        //다를 때
        if(s[lt] !== s[rt]) {
            if(s.slice(lt, rt) !== s.slice(lt, rt).split('').reverse().join('') && s.slice(lt+1, rt+1) !== s.slice(lt+1, rt+1).split('').reverse().join('')) {
                answer = "NO";
            }
        }
        lt++;
        rt--;
    }
    return answer;
}

// console.log(solution("abcbdcba")) // yes
// console.log(solution("abcabbakcba")) // yes
console.log(solution("abcacbakcba")) // no
