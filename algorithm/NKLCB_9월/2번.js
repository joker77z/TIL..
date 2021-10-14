function solution(hs, target) {
    let TMP = 0;
    let queue = [];
    let dist = Array.from({
        length: 100001
    }, () => 0);
    let check = Array.from({
        length: 100001
    }, () => 0);

    queue.push(hs);
    check[hs] = 1;
    let count = 1;
    while (queue.length) {
        // TMP++
        // if (TMP === 5) break;

        let v = queue.shift();
        target += count++;
        for (let nv of [v - 1, v + 1, v * 2]) {
            if (nv === target) return dist[v] + 1;
            if (nv > 0 && nv <= 200000 && check[nv] === 0) {
                check[nv] = 1;
                queue.push(nv);
                dist[nv] = dist[v] + 1;
            }
            console.log(nv)
            console.log(target)
        }
        // target += count++;
    }
    // return -1;
}
console.log(solution(5, 6)); // 2
// console.log(solution(10, 3)); // 3
// console.log(solution(1, 11)); // 6