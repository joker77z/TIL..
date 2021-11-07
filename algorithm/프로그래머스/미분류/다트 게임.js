function solution(dartResult) {
  const reg = /[\d]+[SDT][*#]*/g;
  const input = dartResult.match(reg);
  const result = [];
  for (let i = 0; i < input.length; i++) {
    let number = input[i].match(/[\d]+/g)[0];
    const bonus = input[i].match(/[SDT]/g)[0];
    const option = input[i].match(/[#*]/g);
    console.log(option);
    switch (bonus) {
      case 'S':
        number = Number(number);
        break;
      case 'D':
        number = number ** 2;
        break;
      case 'T':
        number = number ** 3;
        break;
    }

    result[i] = number;

    if (option) {
      switch (option[0]) {
        case '#':
          result[i] *= -1;
          break;
        case '*':
          result[i] *= 2;
          result[i - 1] *= 2;
          break;
      }
    }
  }
  return result.reduce((acc, cur) => acc + cur);
}
// console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
// console.log(solution('1D2S0T'));

// function solution(dartResult) {
//   let dartStack = [];
//   let sum = [];
//   for (let i = 0; i < dartResult.length; i++) {
//     // 숫자면 stack 에 push
//     if (!isNaN(dartResult[i])) {
//       dartStack.push(dartResult[i]);
//     }

//     // 영문이면
//     else if (dartResult[i] === 'S') {
//       sum.push(Number(dartStack.join('')) ** 1);
//       dartStack = [];
//     } else if (dartResult[i] === 'D') {
//       sum.push(Number(dartStack.join('')) ** 2);
//       dartStack = [];
//     } else if (dartResult[i] === 'T') {
//       sum.push(Number(dartStack.join('')) ** 3);
//       dartStack = [];
//     } else if (dartResult[i] === '#') {
//       sum[sum.length - 1] *= -1;
//       dartStack = [];

//       // *를 만났을 때
//     } else {
//       sum[sum.length - 1] *= 2;
//       sum[sum.length - 2] *= 2;
//     }
//     console.log(sum);
//   }
//   return sum.reduce((final, cur) => final + Number(cur));
// }
// console.log(solution('1S2D*3T'));
// console.log(solution('1D2S#10S'));
// console.log(solution('1D2S0T'));
