// // 1. 문자열이나 숫자열을 배열로 만든다.
// const test = "apple"
// console.log(Array.from(test)) // [ 'a', 'p', 'p', 'l', 'e' ]


// // 2. 매핑 비슷하게 할 수 있다.
// const nums = [1, 2, 3, 4];
// const nums_re = Array.from(nums, n => n*2)
// console.log(nums_re) // [ 2, 4, 6, 8 ]

// // 만약 매핑으로 했다면?
// const nums2 = [1, 2, 3, 4];
// const nums_re2 = nums2.map(el => el*2)
// console.log(nums_re2) // [ 2, 4, 6, 8 ]

// // 1~8까지 만들기
// n = 8;
// const arr = Array.from({length: n}, (v, i) => i+1)
// console.log(arr)

// // 2차원 배열 0으로 초기화하기
// const arr2 = Array.from({length: n}, () => Array(n).fill(0))
// console.log(arr2)

// // set에서 배열만들기
// const s = new Set([1, 2, 3, 3, 4, 4, 5])
// s_arr = Array.from(s);
// console.log(s_arr)

// // map에서 배열만들기
// // const m = new Map([1, 2, 3, 3, 4, 4, 5])
// // console.log(m)

// test = [1, 2, 3, 4];
// const nH = new Map();
// for (x of test) {
//     nH.set(x, nH.get(x)+1 || 1)
// }
// console.log(nH) // Map(4) { 1 => 1, 2 => 1, 3 => 1, 4 => 1 }
// const nH_arr = Array.from(nH)
// console.log(nH_arr) // [ [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 4, 1 ] ]

// // map 이랑 똑같이 쓸 수 있다.
// for (let [key, value] of nH_arr) {
//     console.log(key, value)
// }
// /*
//     1 1
//     2 1
//     3 1
//     4 1
// */

// // 함수를 이용해서 입력된 숫자 배열로 만들기(이런것도 있구나 정도로 넘어가자.)
// function f() {
//     return Array.from(arguments);
// }
// console.log(f(1, 2, 3))

// function f(...rest) {
//     return rest
//     // return Array.from(argu);
// }
// console.log(f(1, 2, 3))

