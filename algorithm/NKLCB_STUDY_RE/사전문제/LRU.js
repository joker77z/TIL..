function solution(nums, m) {
    let queue = [];
    let tmpNums = [...nums];
    for (let i = 0; i < nums.length; i++) {
        queue.push(tmpNums.shift());
    }
    queue.reverse().splice(m);
    return queue;
}
console.log(solution([1, 2, 3, 2, 6, 2, 3, 5, 7], 5));