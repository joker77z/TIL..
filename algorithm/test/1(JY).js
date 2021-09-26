function solution(A) {
    let answer = 0;
    let nH = new Map();

    for (let x of A) {
        nH.set(x, (nH.get(x) || 0) + 1);
    }
    let tmp = [...nH].sort((a, b) => b[0] - a[0]);
    console.log(tmp);
    for (let [a, b] of tmp) {
        if (a === b) {
            answer = a;
            break;
        }
    }
    return answer;
}
console.log(solution([3, 8, 2, 3, 3, 2]))