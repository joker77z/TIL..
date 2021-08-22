function solution(data) {
    let cnt = 1;

    data.sort((a, b) => {
        if(a[1]===b[1]) return a[0] - b[0];
        else return a[1]-b[1];
    })
    console.log(data)
    // [ [ 2, 3 ], [ 1, 4 ], [ 3, 5 ], [ 4, 6 ], [ 5, 7 ] ]

    let end = data[0][1];

    // data[0][1]이 다음 데이터의 data[1][0]이 같거나 커야 한다.
    for(let i=1; i<data.length; i++) {
        if(end <= data[i][0]) {
            cnt++;
            end = data[i][1]
        }
    }
    return cnt
}

// function solutionB(meeting) {
//     let answer = 0
//     meeting.sort((a, b) => {
//         if (a[1] === b[1]) return a[0] - b[0]
//         else return a[1] - b[1]
//     })
//     let et = 0;
//     for (let x of meeting) {
//         if (x[0] >= et) {
//             answer++;
//             et = x[1];
//         }
//     }
//     return answer
// }

console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]])) // 3
// console.log(solutionB([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]])) // 3
// console.log(solution([[3, 3], [1, 3], [2, 3]]))
// console.log(solutionB([[3, 3], [1, 3], [2, 3]]))