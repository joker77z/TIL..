function solution(arr) {
    // 스택 식으로 쌓는다. 's'와 'e'를 이용해서 's'면 인원수를 하나씩 더하고 'e'면 뺴주게
    let stack = [];
    let cnt = 0;
    let answer = Number.MIN_SAFE_INTEGER;
    for(let x of arr) {
        stack.push([x[0], 's']);
        stack.push([x[1], 'e']);
    }

    // 정렬한다. 숫자 오름차순으로 숫자가 같을 때는 e가 먼저 나와서 cnt--가 먼저되게. 
    stack.sort((a, b) => {
        // 숫자가 같을 때 e부터 계산하게
        if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        // 숫자가 같지 않을 때
        return a[0] - b[0];
    })
    
    // 하나씩 들어오면서 인원수를 추가해주거나 빼준다.
    for(let x of stack) {
        if(x[1] === 's') cnt++;
        else cnt--;
        answer = Math.max(answer, cnt);
    }
    return answer;
} 
console.log(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]));