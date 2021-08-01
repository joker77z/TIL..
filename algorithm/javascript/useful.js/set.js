arr = [1, 2, 3, 3]
const set = new Set(arr);
console.log(set) // Set(3) {1, 2, 3}

console.log(set[0]) // undefined

for(x of set) {
    console.log(x)
}
// 1
// 2
// 3

// 사이즈
console.log(set.size) // 3

// 존재하는가?
console.log(set.has(3)) // true
set.delete(3)
console.log(set) // Set(2) {1, 2}

// 요소들로 반환받기
console.log(...set) // 1, 2

// 배열로 반환받기
console.log([...set]) // 1, 2


// 다 지우기
set.clear()
console.log(set) // Set(0)

// ---------------------
// 중복제거 > 다시 배열로 반환
const uniq = arr => [...new Set(arr)];
console.log(uniq(arr)) // [1, 2, 3]