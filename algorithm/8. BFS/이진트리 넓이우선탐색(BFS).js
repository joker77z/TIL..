function solution() {
    let queue = [];
    let answer = "";
    queue.push(1);

    while (queue.length) {
        let v = queue.shift();
        answer += v + " ";
        for (let nv of [v * 2, v * 2 + 1]) {
            if (nv > 7) break;
            console.log(nv)
            queue.push(nv);
            console.log(queue)
        }
    }
    console.log(answer)
}
console.log(solution());