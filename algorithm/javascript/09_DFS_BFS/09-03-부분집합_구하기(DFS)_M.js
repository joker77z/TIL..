/*
    8.1 10:42 ~10:45

    ‣ 문제
    자연수N이 주어지면 1부터 N까지 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램

    ‣ 예시
    입력 : 3
    출력 : [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3]]

    ‣ 해설
    
    ‣ 깨달은 점

*/  

function solution(n) {
    let answer = [];
    let part = [];

    function DFS(v) {
        if(v === n+1) { // 종료문. 4가 됬을 떄 끝난다.
            if(part.length !== 0) answer.push(part.slice());
        } else { // 진행문
            part.push(v);
            DFS(v+1);
            part.pop();
            DFS(v+1);
        }
    }
    
    DFS(1)
    return answer;
}

console.log(solution(3))