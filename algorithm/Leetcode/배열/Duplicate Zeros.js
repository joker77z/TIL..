/* 
    10/11 9:01~
    0을 발견하면 오른쪽으로 배열을 민다. 길이는 한정되있다.
    
    PseudoCode
    1. 0을 찾는다.
    2. 0을 발견하면 해당 인덱스에서 1을 더해서 다음 인덱스에 0을 넣는다.
    
    let tmp = [...nums]
    for(i=0 ~ i<nums.length)
        if tmp[i] === 0
            for(j = i+1 ~ j<tmp.length)
                tmp[j+1] = tmp[j]
            tmp[j] = 0;
    tmp.splice(0, nums.length)
    
*/

/*
function solution(nums) {
  let n = nums.length;
  console.log(nums);
  console.log(n);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i + 1, 0, 0);
      i += 2;
    }
  }
  console.log(nums);
  console.log(nums.length);
  nums = nums.slice(0, n);
  return nums;
}
console.log(solution([1, 0, 2, 3, 0, 4, 5, 0]));
*/

function solution(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(i);
      console.log(arr);
      for (let j = arr.length; j >= i + 2; j--) {
        arr[j] = arr[j - 1];
      }
      arr[i + 1] = 0;
      i += 1;
      console.log(arr);
    }
  }
  arr.splice(n);
  return arr;
}
console.log(solution([1, 0, 2, 3, 0, 4, 5, 0]));
// console.log(solution([0, 4, 1, 0, 0, 8, 0, 0, 3])); // [0,0,4,1,0,0,0,0,8]
