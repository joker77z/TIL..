const test = [1, 2, 3]

// 한개라도 참이면 true.
test.some(el => el>3); // true

// 모두가 참이여야 true
test.every(el => el>3); // false