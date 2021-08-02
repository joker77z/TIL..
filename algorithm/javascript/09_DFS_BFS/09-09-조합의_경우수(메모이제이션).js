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

// 강의.
// 아래코드에서 33, 19하면 시간이 오래걸린다.

// function solution(n, r) {
//     let answer = 0;

//     function DFS(n, r) {
//         if(n===r || r===0) return 1;
//         else {
//             return DFS(n-1, r-1) + DFS(n-1, r);
//         }
//     }
//     answer = DFS(n, r);
//     return answer;
// }

// console.log(solution(5, 3)) // 10
// console.log(solution(33, 19)) // 818809200


// 메모이제이션을 사용한다.
// 쓸데없는 재귀는 안돌리는 것.

// 메모이제이션 할 때. 여기서 이미 구했는데 또 구하네? (트리를 구할 때 알 수 있다.)
// 재귀에서 하는거다.
// 다이나믹을 재귀로 풀 때가 있다.(탑다운 방식 -> 이거를 안쓰신다고 한다. 그냥 1차원이나 2차원배열을 쓴다.)
// 사람마다 다르다. 다이나믹유형을 재귀로 풀 때 메모이제이션을 이용하면 된다.
// 강사님은 바텀업 방식(직관적으로 이해할 수 있는 방식)으로 알려주신다.


function solution(n, r) {
    let answer = 0;
    // 2차원배열을 하나 잡는다.
    let dy = Array.from(Array(35), () => Array(35).fill(0)); 
    // 33까지니까 35개 빈 배열만든다. 35행 35열 잡았다.

    function DFS(n, r) {
        // 이미 구했는데 또 구하려는 것. 이미 있더라 하면 거기에 저장되어있는 값 return
        if(dy[n][r]>0) return dy[n][r];

        if(n===r || r===0) return 1;
        else {
            // 2차원에 한번 저장해주고 return해준다.
            return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
        }
    }
    answer = DFS(n, r);
    return answer;
}

// console.log(solution(5, 3)) // 10
console.log(solution(33, 19)) // 818809200