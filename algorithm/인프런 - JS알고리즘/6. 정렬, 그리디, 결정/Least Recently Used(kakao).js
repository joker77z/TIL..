/*
    가장 오래 사용하지 않은 것 제거하기.

    Pseudo Code
    for(x of nums)
        if 이미 memory.length === k면 shift()
        if memory에 없다면
            memory.push
        else memory에 있다면
            순위를 제일 앞으로 바꾼다.

*/
function solution(data, k) {
    let memoryStack = [];
    for(let d of data) {
        if(memoryStack.length === k) memoryStack.pop(); // 이미 memory가 풀일 때.
        if(!memoryStack.includes(d)) { // memory에 없었던 데이터라면 추가한다.
            memoryStack.unshift(d);
        } else { // 이미 있던 데이터인데 불렀다면 해당 데이터는 제일 앞으로 이동해야 한다.
            // 삽입정렬로 해보자.
            let idx = memoryStack.indexOf(d);
            let tmpMemory = memoryStack[idx];
            for(let i=idx; i<idx+1; i++) {
                for(let j=i-1; j>=0; j--) {
                    memoryStack[j+1] = memoryStack[j];
                }
            }
            memoryStack[0] = tmpMemory;

        }
        console.log(memoryStack)
    }
} 
console.log(solution([1, 2, 3, 2, 6, 2, 3, 5, 7], 5));