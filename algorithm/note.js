// 배열 중에 target의 2배인 요소 있을 때 true
// arr = [10, 5, 2] 5의 2배 10이 있으니 true
function solution(arr) {
  while (arr.length) {
    const target = arr.pop();
    if (arr.includes(target * 2) || arr.includes(target / 2)) return true;
  }
  return false;
}

s.charCodeAt();
