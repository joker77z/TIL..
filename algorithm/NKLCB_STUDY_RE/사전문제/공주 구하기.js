function solution(n, k) {
    let queue = Array.from({
        length: n
    }, (_, i) => i + 1);
    let cnt = 0;
    while (queue.length > 1) {
        cnt++;
        queue.push(queue.shift());
        if (cnt % 3 === 0) {
            queue.pop();
        }
        console.log(queue)
    }
    return queue.join('');
}
console.log(solution(8, 3)); // 7