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
        let res=""; // 루트가 공집합.
        for(let x of tmp) res+= x;
        console.log(res);

        for(let i=s; i<=n; i++) { 
            tmp.push(i);
            DFS(L+1, i+1); // 다음 숫자부터 돌아야되기 떄문에 i+1. 현재적용한 숫자+1
            tmp.pop();
        }
    }
    DFS(0, 1);
    return answer;
}

console.log(solution(4, 2))

// 원소 4개짜리 출력
// 부분집합 확인해보라하면 이 코드로 할 수도 있다.
/*
1
12
123
1234
124
13
134
14
2
23
234
24
3
34
4
[]
*/