// 7. Least Recently Used(카카오 캐시 문제 변형)

function solution(nums, s) {
  let newNums = [];
  nums.forEach((el) => {
    newNums.unshift(el);
  });
  newNums.splice(s, newNums.length);
  return newNums;
}

console.log(solution([1, 2, 3, 2, 6, 2, 3, 5, 7], 5));
