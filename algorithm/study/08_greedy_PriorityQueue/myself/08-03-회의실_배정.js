// function solution(data) {
//     let answer = 1;
//     // data sort한다. 끝나는 시간 오름차순 되도록.
//     // 만약 끝나는 시간이 같다면 시작시간 기준 오름차순 되도록. 
//     data.sort((a, b) => {
//         if(a[1] === b[1]) return a[0]-b[0];
//         else return a[1]-b[1];
//     })
//     console.log(data)
//     let et = data[0][1];
//     for(let i=1; i<data.length; i++) {
//         if(et<=data[i][0]) { // 다음 회의의 시작시간 보다 같거나 작다면 다음 회의가 시작 가능하다.
//             // 끝나는 시간을 다음시간으로 대체한다.
//             console.log(data[i])
//             answer++;
//             et = data[i][1];
//         }
//     }
//     return answer;
// }

function solutionA(data) {
    let answer = 0;
    data.sort((a, b) => {
        if(a[0] === b[0]) return a[0]-b[0];
        else return a[1] - b[1];
    })

    let et = 0;
    for(let x of data) {
        if(et <= x[0]) {
            answer++;
            et = x[1];
        }
    }
    return answer;
}

// console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]])) // 3
console.log(solutionA([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]])) // 3