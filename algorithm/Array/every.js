// 모든 요소가 true여야 true반환
const nums = [5, 10, 15];
const numsEvery = nums.every(item => item > 3)
console.log(numsEvery)

// 주의 : every메서드를 호출한 배열이 빈 배열이면 true가 나옴
console.log([].every(item => item > 3))