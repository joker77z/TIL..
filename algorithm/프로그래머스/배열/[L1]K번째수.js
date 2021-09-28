function solution(arr, commands) {
    let answer = [];
    for (let [start, end, target] of commands) {
        let tmpArr = arr.slice(start - 1, end);
        tmpArr.sort((a, b) => a - b);
        answer.push(tmpArr[target - 1]);
    }
    return answer;
}
const arr = [1, 5, 2, 6, 3, 7, 4];
const commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3]
]
console.log(solution(arr, commands));