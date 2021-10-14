/*
    8.1 

    ❗️ 참고
    

    ‣ 문제
    

    ‣ 예시
    입력 : 
    출력 : 

    ‣ 해설
    
    ‣ 깨달은 점

*/  

function solution(n, f) {
    let answer = 0, flag=false;
    // 2차원배열을 하나 잡는다.
    let dy = Array.from(Array(11), () => Array(11).fill(0)); 
    // 33까지니까 35개 빈 배열만든다. 35행 35열 잡았다.
    let ch = Array.from({length:n+1}, () => 0)
    let p = [], b = [];
    function combi(n, r) {
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r==0) return 1;
        else return dy[n][r]=combi(n-1, r-1)+combi(n-1, r);
    }
    function DFS(L, sum) {
        if(flag) return;
        if(L===n) {
            if(sum===f) { // 순열을 발견했으니까?
                answer=p.slice();
                flag=true;
            }
        }
        else {
            for(let i=1; i<=n; i++) {
                // 외워놓은 순열 그대로
                if(ch[i]===0) { // 0이면 순열 넣는다.
                    ch[i]=1;
                    p.push(i);
                    DFS(L+1, sum+(p[p.length-1]*b[L]));
                    ch[i]=0; // 대칭으로. 다시 풀어주고.
                    p.pop();
                }
            }
        }
    }
    // ✨ 콤비네이션을 사용하지 않고 조합 공식을 사용하는 방법. 
    // 이부분 추가 및 수정 ------------------
    b.push(1);
    for(let i=1; i<n; i++) {
        b.push((b[i-1]*(n-i))/i); // 아이패드에 조합 공식.
    } // ---------------------------------
    DFS(0, 0);
    return answer;
}

console.log(solution(4, 16)) // [3, 1, 2, 4]