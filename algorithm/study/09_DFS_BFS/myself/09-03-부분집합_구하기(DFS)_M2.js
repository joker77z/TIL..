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
    let tmp = [];
    function DFS(L) {
        if(L === n+1) { // 4레벨에 answer에 더하기.
            if(tmp.length !== 0) answer.push(tmp.slice())
        }
        else {
            tmp.push(L);
            DFS(L+1);
            tmp.pop(L);
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3))