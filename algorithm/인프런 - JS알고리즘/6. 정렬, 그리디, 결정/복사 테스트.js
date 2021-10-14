
//POINT: Array
let arr = [1, 2, 3, 4, 5];
// let test1 = [...arr];
let test1 = arr;

arr.push(3);
// test1.pop()

console.log(arr)
console.log(test1)


//POINT: String
let string = "12345";
let copy = string;

string = string + '2';

console.log(string)
console.log(copy)


//POINT: Number
let nums = 12345;
let copynums = nums;

nums = nums+1;

console.log(nums, copynums)
