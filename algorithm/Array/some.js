// 단 한번이라도 참이면 true
const nums = [5, 10, 15];
const overTen = nums.some(item => item > 10);
console.log(overTen)

// 요소가 한개라도 존재하는지 확인
const items = ["apple", "banana", "apple"];
const hasItems = items.some(item => item === "banana");
console.log(hasItems)