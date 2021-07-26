/*
    회문문자열2
    
    문자 최대 1개 뺐을 때 회문문자열이 되면 "YES"
    안되면 "NO"

    풀이======================
    양쪽 끝에서 index를 정하고 앞에서는 +1, 뒤에서는 -1하면서 가운데로 온다.
    그러면서 다른 부분에서. 그 부분을 제외하고 원본과 reverse()를 돌려보면서 비교한다.
    
*/

function solution(s) {
    let answer = "YES";
    let lt = 0;
    let rt = s.length-1;
    
    while(lt<rt) {
        if(s[lt] !== s[rt]){ // 다를 때
            let s1 = s.substring(lt, rt);
            let s2 = s.substring(lt+1, rt+1);
            if(s1 !== s1.split('').reverse().join('') && s2 !== s2.split('').reverse().join('')) {
                answer = 'NO'
            }
        } 
        lt ++;
        rt --;
    }
    return answer
}

console.log(solution("abcbdcba"))
// console.log(solution(["abcbdcba", "abcabbakcba", "abcacbakcba"]))