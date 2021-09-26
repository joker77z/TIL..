/*
    앞으로 1
    앞으로 5
    뒤로 1

    ex
    현수위치, 송아지위치
    5, 14

    최소 몇번 return
*/

// check없이 실험. check없이 해야 한번 레벨표기했을때(이미최소값) 또 레벨을 안 덮어쓸수있다.(레벨=회수)
// function solution(hs, target) {
//     let cnt = 0;
//     let queue = [];
//     let dist = Array.from({
//         length: 100001
//     }, () => 0);

//     queue.push(hs);
//     while (queue.length) {
//         let v = queue.shift();
//         for (let nv of [v + 1, v + 5, v - 1]) {
//             if (nv === target) return dist[v] + 1;
//             if (nv > 0 && nv <= 10000) {
//                 queue.push(nv);
//                 dist[nv] = dist[v] + 1;
//             }
//         }
//     }
// }
// console.log(solution(5, 14));

// 강의
function solution(hs, target) {
    let cnt = 0;
    let queue = [];
    let dist = Array.from({
        length: 100001
    }, () => 0);
    let check = Array.from({
        length: 100001
    }, () => 0);

    queue.push(hs);
    check[hs] = 1;
    while (queue.length) {
        let v = queue.shift();
        for (let nv of [v + 1, v + 5, v - 1]) {
            if (nv === target) return dist[v] + 1;
            if (nv > 0 && nv <= 10000 && check[nv] === 0) {
                check[nv] = 1;
                queue.push(nv);
                dist[nv] = dist[v] + 1;
            }
        }
    }
}
console.log(solution(5, 14));