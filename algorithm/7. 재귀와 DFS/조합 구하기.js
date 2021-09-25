/*
    23:44 ~
    
    조합 구하기
    1~N까지 적힌 구슬. M개를 뽑는 방법 수 출력.

    ex
    4 2
    
    output
    1 2
    1 3
    1 4
    2 3
    3 4
    return 6
*/

// 강좌
function solution(n, m) {
    let tmp = [];
    let cnt = 0;
    let answer = [];

    function DFS(L, s) {
        if (L === m) {
            answer.push([...tmp]);
            cnt++;
        } else {
            for (let i = s; i <= n; i++) {
                tmp[L] = i;
                // tmp.push(i);
                DFS(L + 1, i + 1);
                // tmp.pop()
            }
        }
    }
    DFS(0, 1);
    return answer;
}
console.log(solution(4, 2));


// try 2
// function solution(n, m) {
//     let answer = 0;
//     let output = [];
//     console.log(output)

//     let tmpcnt = 0;

//     function DFS(k) {
//         if (tmpcnt === 10) return;
//         console.log(output.length)
//         if (output.length === m) {
//             console.log(output.join(' '));
//             answer++;
//         } else {
//             for (let i = 1; i <= n; i++) {
//                 output.push(i);
//                 for (let j = i + 1; j <= n; j++) {
//                     output.push(j);
//                     output.pop();
//                     tmpcnt++;
//                 }
//             }
//         }
//     }
//     DFS(0)
//     return answer;
// }
// console.log(solution(4, 2));



// try 1 실패
// function solution(n, m) {
//     let print = [];
//     let answer = 0;
//     let check = Array.from({
//         length: n + 1
//     }, () => 0);

//     function DFS(k) {
//         if (print.length === m) {
//             console.log(print.join(' '));
//             answer++;
//         } else {
//             if (check[i] === 0) {
//                 check[i] = 1;
//                 print.push(i);
//                 for (let i = 1; i <= n; i++) {
//                     DFS(k);
//                 }
//                 print.pop();
//                 check[i] = 0;
//             }
//         }
//     }
//     DFS(0);
//     return answer;
// }
// console.log(solution(4, 2));