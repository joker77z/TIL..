/*
    3일간 쉬지않고 피로연
    몇시에 도착, 몇시에 떠날건지
    동시에 존재할 수 있는 최대 인원수 return

    ex. 오는 시간: 13, 가는 시간: 15면
    이 친구는 13시 정각에 존재 O. 15시 정각에는 존재하지 X

    PseudoCode
    친구들 시작시간으로 정렬.
    시작시간이 같으면 끝나는 시간으로 정렬

    시작시간을 저장해놓고 다음 친구의 끝나는 시간 이하인지 판단 cnt++

    정답보고 Pseudo Code
    시작시간에 가고 끝나는 시간에 그 자리에 없기 때문에
    시작시간에 인원수를 ++ 해주고 끝나는 시간에 --해준다.
    동시에 들어가있는 사람을 계산할 때 나가는 사람과 들어오는 사람이 교차될 때는
    Math.max값이 뻥튀기 되지 않도록 나가는 사람을 먼저 계산해서 --을 먼저해준다.

    좀 더 상세하게 쓰면
    시작시간이면 's'를. 끝나는 시간이면 'e'를 넣어서 스택식으로 쭉 쌓는다.
    's'면 카운트를 더하고 'e'면 카운트를 빼는 식으로 한다.
    하지만 시작시간과 끝나는시간이 같으면 'e'를 먼저 계산하고 's'를 계산한다.
    'e'를 먼저계산하게 해주도록 sort를 해준다.
*/

function solutionC(arr) {
    let stack = [];
    let cnt = 0;
    let answer = 0;
    for(let x of arr) {
        stack.push([x[0], 's']);
        stack.push([x[1], 'e'])
    }
    // 정렬
    stack.sort((a, b) => {
        if(a[0] === b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
        else return a[0]-b[0];
    })
    console.log(stack)
    // s면 카운트를 더해주고 e면 카운트를 빼준다.
    for(let x of stack) {
        if(x[1]==='s') {
            cnt++;
        } else {
            cnt--;
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
} 
console.log(solutionC([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]));


// function solution(friends) {
//     friends.sort((a, b) => {
//         if(a[0]===b[0]) return a[1]-b[1];
//         return a[0] - b[0];
//     })
//     console.log(friends)
//     let tmp = friends[0][1];
//     let cnt = 1;
//     let answer = 0;
//     for(let i=1; i<friends.length; i++)
//         if(friends[i][0]<=tmp && friends[i][1]-1>=tmp) {
//             cnt++;
//             tmp = friends[i]-1;
//             answer = Math.max(answer, cnt);
//         } else {
//             cnt = 1;
//         }
//         return answer;
// }
// console.log(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]));
// console.log(solution([[14, 18], [12, 15], [11, 20], [10, 30], [5, 14]]));


// 위처럼 문제풀고나니 앞 뒤를 다 기억해야 한다는 것을 깨달았다. 다시 푼다. 

// function solutionB(friends) {
//     friends.sort((a, b) => {
//         if(a[0]===b[0]) return a[1]-b[1];
//         return a[0] - b[0];
//     })
//     console.log(friends)
//     let start = friends[0][1];
//     let end = friends[0][1]-1;
//     let cnt = 1;
//     let answer = 0;
//     for(let i=1; i<friends.length; i++)
//         // console.log(start, end)
//         console.log(friends[i][0], friends[i][1])
//         if(friends[i][0]<=start || friends[i][1]-1>=end) {
//             // console.log()
//             cnt++;
//             answer = Math.max(answer, cnt);
//         } else {
//             cnt = 1;
//             start = friends[i][0];
//             end = friends[i][1];
//         }
//         return answer;
// }
// console.log(solutionB([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]));
// console.log(solutionB([[14, 18], [12, 15], [11, 20], [10, 30], [5, 14]]));