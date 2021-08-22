function solution(a) {
    let [s1, s2] = a;
    let answer = 'YES'
    // sH라는 변수에 s1의 개수를 세서 넣고.
    // sH안에 s2가 있을 때 sH의 개수를 하나씩 뺀다.
    const sH = new Map();

    for(x of s1) {
        sH.set(x, sH.get(x)+1 || 1);
    }
    for (x of s2) {
        // 가지고 있지 않다면
        if(!sH.has(x) || sH.get(x) === 0) {
            answer = 'NO';
            break;
        }
        sH.set(x, sH.get(x)-1)
    }
    return answer;
}

console.log(solution(['AbaAeCe', 'baeeACA']))