/*
    문제
    공주 구하기

    1번부터 ~ N번까지 번호가 있고 1부터 세서 k번을 계속 지운다.
    마지막 남은 번호가 return.
    > length:n (v, i) => i+1

    풀이
    point: 큐를 이용한다.
    k번 이전까지. k가 3이라하면 1, 2번은 shift하면서 queue에 넣고
    > queue.push(queue.shift())
    k번째에서 그냥 queue.shift()를 한다.

*/

function solution(n, k) {
    let answer;
    let queue = Array.from({length:n}, (v, i) => i+1);
    while(queue.length) {
        // 2개를 queue 뒤에 붙여주고 3번째인 것을 지워준다.
        for(let i=0; i<k-1; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
        if(queue.length === 1) {
            answer = queue.shift();
        }
    }
    return answer;
}

console.log(solution(8, 3));