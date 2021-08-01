/*
    공주구하기

    1번부터 N번까지 차례로 번호를 매긴다.
    동그랗게 앉는다.
    1번부터 번호 외치게 하는데 K외치는 왕자 제외.
    다음 왕자부터 다시 1시작.

*/

// function solution(n, k) {

// }

// console.log(solution(8, 3))




// 강사님
// 큐를 쓴다. 큐를 단독으로 쓸 일은 별로 없을 것이다.
// BFS에서 큐를 등장하기 때문에 단독으로 큐를 사용할 일은 스택에 비해 새발에 피다.
// 스택이 엄청 등장한다.

// 넣을때는 queue.push()
// 꺼낼때는 queue.shift()

// 1. 1~8까지 queue에 넣는다. Array.from으로 만들면 편하다.  

// 강사님 말씀 듣고 친 코드.
// function solution(n, k) {
//     let answer;
//     let queue = Array.from({length: 8}, (v, i) => i+1);
    
//     // 큐가 빌 때까지 (큐가 있을 땐 계속 돈다.)
//     while(queue.length) {
//         for(let i=0; i<k-1; i++) {
//             let tmp = queue.shift()
//             queue.push(tmp)
//         }
//         queue.shift()
//         if(queue.length === 1) {
//             answer = queue.shift()
//         }
//     }
//     return answer;
// }

// console.log(solution(8, 3))

// 강사님 코드.
function solution(n, k) {
    let answer;
    let queue = Array.from({length: 8}, (v, i) => i+1);
    
    // 큐가 빌 때까지 (큐가 있을 땐 계속 돈다.)
    while(queue.length) {
        for(let i=0; i<k-1; i++) {
            queue.push(queue.shift())
        }
        queue.shift()
        if(queue.length === 1) {
            answer = queue.shift()
        }
    }
    return answer;
}

console.log(solution(8, 3))