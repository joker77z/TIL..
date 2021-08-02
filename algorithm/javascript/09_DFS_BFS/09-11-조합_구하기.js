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

// 나열이 아니다. 뽑기다.

// 조합을 구하는 기본이다.!!!!!!!!!!!!!!!!!
// 이걸 외워라 그냥!
function solution(n, m) {
    let answer = [];
    let tmp = [];
    function DFS(L, s) {
        if(L===m) {
            answer.push(tmp.slice())
        }
        else {
            // 1부터 n까지 돈다.
            for(let i=s; i<=n; i++) { 
                tmp.push(i);
                DFS(L+1, i+1); // 다음 숫자부터 돌아야되기 떄문에 i+1. 현재적용한 숫자+1
                tmp.pop();
            }
        }
    }
    DFS(0, 1);
    return answer;
}

console.log(solution(4, 2)) // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]