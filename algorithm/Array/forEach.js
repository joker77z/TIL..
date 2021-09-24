const numbers = [1, 2, 3];
const pows = [];

numbers.forEach(el => {
  pows.push(el ** 2);
});

console.log(pows);

// 원본 배열 변경
numbers.forEach((item, index, arr) => {
  arr[index] = item ** 2;
});
console.log(numbers);

// ---------------------------------------------

// class Numbers {
//   numberArray = [];
//   multiply(arr) {
//     arr.forEach(item => this.numberArray.push(item * item));
//   }
// }

// const nums = new Numbers();
// nums.multiply([1, 2, 3]);
// console.log(nums.numberArray);
