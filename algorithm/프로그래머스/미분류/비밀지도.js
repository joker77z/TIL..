// 비밀지도
// 암호 해독, 한 변의 길이 n인 정사각형
// 칸의 종류 [' ', '#'] 공백과 벽.
// 전체 지도는 두 지도를 겹쳐서(arr1, arr2)
// 벽 부분을 1, 공백부분을 0으로 한 이진수배열

// n: 지도 한 변의 크기,
function solution(n, arr1, arr2) {
  let changeArr1 = Array.from({ length: n }, () => Array(n).fill(0));
  let changeArr2 = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let tmp = arr1[i].toString(2);
    tmp = tmp.padStart(n, 0);
    for (let j = 0; j < tmp.length; j++) {
      if (tmp[j] === '0') {
        changeArr1[i][j] = ' ';
      } else {
        changeArr1[i][j] = '#';
      }
    }
    changeArr1[i] = changeArr1[i].join('');
  }
  console.log(changeArr1);

  for (let i = 0; i < n; i++) {
    let tmp = arr2[i].toString(2);
    tmp = tmp.padStart(n, 0);
    for (let j = 0; j < tmp.length; j++) {
      if (tmp[j] === '0') {
        changeArr2[i][j] = ' ';
      } else {
        changeArr2[i][j] = '#';
      }
    }
    changeArr2[i] = changeArr2[i].join('');
  }
  console.log(changeArr2);

  let changeMap = changeArr1.map((v, i) => {
    let tmp = [];
    for (let j = 0; j < v.length; j++) {
      if (v[j] === '#' || changeArr2[i][j] === '#') {
        tmp[j] = '#';
      } else {
        tmp[j] = ' ';
      }
    }
    tmp = tmp.join('');
    return tmp;
  });
  return changeMap;
}
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
