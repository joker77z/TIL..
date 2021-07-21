// 3. 가위 바위 보
function solution(aNum, bNum) {
  let newArray = [];
  for (let i = 0; i < aNum.length; i++) {
    if (Math.abs(aNum[i] - bNum[i]) === 1) {
      if (aNum[i] > bNum[i]) {
        newArray.push("A");
      } else {
        newArray.push("B");
      }
    } else if (Math.abs(aNum[i] - bNum[i]) === 2) {
      if (aNum[i] > bNum[i]) {
        newArray.push("B");
      } else {
        newArray.push("A");
      }
    } else {
      newArray.push("D");
    }
  }
  return newArray;
}
console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));