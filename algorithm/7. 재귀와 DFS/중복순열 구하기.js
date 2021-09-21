/*
    1~N까지 번호 구슬
    중복으로 m번을 뽑아서 나열

    오름차순으로 출력
    
    마지막 총 경우의 수 return
*/

// 내 풀이. 
// function solution(n, m) {
//     let answer = 0;
//     let tmp = [];
//     let arr = Array.from({length:n}, (_, i) => i+1);
//     function DFS(L) {
//         if(L===m) {
//             answer++;
//             console.log(tmp.join(' '));
//         }
//         else {
//             for(let i=0; i<n; i++) {
//                 tmp.push(arr[i]); // L=0일 때 tmp에 arr[0]이 push됬다.
//                 DFS(L+1); // answer로 tmp 넣는다.
//                 tmp.pop(); // tmp 하나 뺀다. 다음 for문 하면 다음 수 들어올꺼니까.
//             }
//         }
//     }
//     DFS(0);
//     return answer;
// } 
// console.log(solution(3, 2));

// 강좌 : for문을 사용하면 안되는 이유는 m이 3으로 늘어나게 되면 for문을 3중 for문으로 바꿔주는 등. 개발자가 계속 바꿔줘야 한다.

function solution(n, m) {
    let answer = [];
    let tmp = [];
    function DFS(L) {
        if(L===m) {
            answer.push(tmp.slice());
        } else {
            for(let i=1; i<=n; i++) {
                tmp[L] = i;
                DFS(L+1);
            }
        }
    }
    DFS(0);
    return answer.length;
} 
console.log(solution(3, 2));