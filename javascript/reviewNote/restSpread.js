// // spread ==========================
// // 두 가지 예시만 보자.
// // 1. 객체를 다른 객체의 일부요소로 추가할 때
// const taejoonName = {
//     name: 'park tae joon',
// }

// const taejoon = {
//     ...taejoonName,
//     age: 29,
// }

// console.log(taejoon);

// // 2. 배열을 다른 배열의 일부요소로 추가할 때
// const animal = ['dog', 'cat'];
// const plusAnimal = ['dragon', ...animal]
// console.log(plusAnimal)


// // rest ============================
// // 계속 추가되는 숫자를 계속 뺴기.
// /*

// function subtract(x, y, ...rest) {
//     let sum = x-y;
//     rest.forEach(el=> {
//         sum = sum-el
//     })
//     return sum;
// }

// const data = [10, 1, 1, 2, 3];
// console.log(subtract(...data))

// */

// // 또 활용.

// function max(x, y, ...rest) { // x = 1, y = 2, rest = [3, 4, 10, 5, 6, 7]
//     console.log(x, y, rest)
//     // let maxNum = rest[0];
//     // rest.forEach((el) => {
//     //   if (el > maxNum) {
//     //     maxNum = el;
//     //   }
//     // });
//     // return maxNum;
// }
// const number = [1, 2, 3, 4, 10, 5, 6, 7]
// const result = max(...number); // 1, 2, 3, 4, 10, 5, 6, 7
// console.log(result);


// 객체에서는? ========================

function test(rest) {
    return rest
}

const obj = {
    index: 1,
    name: 'ptj',
}
console.log(test(...obj)) // 배열을 풀어 넣어야 되는데 객체는 안된다.

// => 그러면 배열안에 객체로 나눈 것은? =====================

function test(rest) {
    return rest
}

const obj = {
    index: 1,
    name: 'ptj',
}
console.log(test(...obj)) // 배열을 풀어 넣어야 되는데 객체는 안된다.