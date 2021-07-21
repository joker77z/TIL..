// 4. 격자판 최대합

function solution(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let sum1 = 0;
      let sum2 = 0;
      for (let j = 0; j < arr.length; j++) {
        sum1 += arr[i][j];
        sum2 += arr[j][i];
      }
      newArr.push(sum1);
      newArr.push(sum2);
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i][i];
    }
    newArr.push(sum);
  
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let j = 4;
      sum += arr[i][j];
      j -= 1;
    }
    newArr.push(sum);
  
    return Math.max(...newArr);
  }
  
  console.log(solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
  ]));