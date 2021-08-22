/*
    8.1 

    ❗️ 참고
    

    ‣ 문제
    1부터 N까지 번호가 적힌 구슬이 있다. 중복을 허락해서 M번 뽑아 일렬로 나열하는 방법을
    모두 출력.

    입력 : n, m
    출력 : 배열형태로 반환. 각 경우의 순서는 오름차순.

    ‣ 예시
    입력 : 3 2
    출력 : [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]

    ‣ 해설
    
    ‣ 깨달은 점

*/  


// ✅ 오늘 문제는 순열 문제다. 집중!!!!!!!!!!!!!!

// 2가닥으로 정해진게 아니다. 구슬이 n개 구슬이 5개면 5가닥. 10개면 10가닥.
// n가닥을 뻗어야 한다. 
// 이번엔 중복 허용 X

function solution(n, m) {
    let answer = [], tmp= [];
    let ch = Array.from({length:n+1}, ()=>0);
    function DFS(L) {
        if(L===m) {
            answer.push(tmp.slice());
        }
        else {
            for(let i=1; i<=n; i++) {
                if(ch[i] === 0) {
                    ch[i]=1;
                    tmp.push(i);
                    DFS(L+1); 
                    tmp.pop();
                    ch[i]=0;
                }
            }
        }
    }

    DFS(0);
    return answer;
}

console.log(solution(3, 2))