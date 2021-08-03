// 1차원 배열 초기화
const test = [1, 2, 3]
const n = test.length;
let empty = Array(n).fill(0)
console.log(empty)

// 2차원 배열 초기화.
// Array.from({length: 행 개수}, () => Array(열 개수).fill(0))
const dy = Array.from({length:n}, () => Array(2).fill(0))
console.log(dy)