/*
    기능 개발
*/

function solution() {

}
console.log(solution());

// --------------------------------------
// 이미 풀었던거 keep
// function solution(progresses, speeds) {
//     let answer = [];
//     let queue = [];
//     let day = 0;
//     let nH = new Map();

//     for(let x of progresses) {
//         queue.push(x);
//     }
//     while(queue.length) {
//         while(queue[0]>=100) {
//             queue.shift();
//             speeds.shift();
//             nH.set(day, nH.get(day)+1 || 1);
//         }
//         if(queue.length===0) {
//             break;
//         }
//         if(queue.length>0) {
//             for(let i=0; i<queue.length; i++) {
//                 queue[i] = queue[i] + speeds[i];
//             }
//         }
//         day++;
//     }
//     for (let [key, value] of nH) {
//         answer.push(value);
//     }
//     console.log(nH)
//     return answer;
// }

// // console.log(solution([100, 230, 255], [1, 30, 5]))
// console.log(solution([93, 30, 55], [1, 30, 5]))