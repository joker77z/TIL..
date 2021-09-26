//  기본
// const num = [1, 2, 3, 4].reduce((acc, cur, i, arr) => {
//   return acc + cur;
// }, 0);
// console.log(num);

// 🌟 평균구하기
// const values = [1, 2, 3, 4, 5, 6];
// const average = values.reduce((acc, cur, i, {
//   length
// }) => {
//   return i === length - 1 ? (acc + cur) / length : acc + cur;
// }, 0)
// console.log(average);

// ❌ 최대값 구하기 (Math.max가 더 유용함.)
// const values = [1, 2, 3, 4, 5];
// const max = values.reduce((acc, cur) => {
//   return acc > cur ? acc : cur
// }, 0);
// console.log(max)

// 🌟🌟🌟 요소의 중복 횟수 구하기 (결과물 : 객체)
// const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
// const fruitsCount = fruits.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   console.log(acc[cur])
//   console.log(cur)
//   return acc;
// }, {})
// console.log(fruitsCount)

// ❌ 중첩 배열 평탄화 (flat메서드가 더 유용함.)
// const values = [1, [2, 3], 4, [5, 6]];
// const flatten = values.reduce((acc, cur) => {
//   return acc.concat(cur);
// }, [])
// console.log(flatten);

// 중첩 배열 평탄화 (flat)
// const values = [1, [2, 3], 4, [5, 6]];
// const flatten = values.flat();
// console.log(flatten)

// ❌ 중복 요소 제거
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
// const setvalues = new Set(values);
// console.log([... setvalues])
// const setValues = values.reduce((acc, cur, i, arr) => {
//   if (!acc.includes(cur)) {
//     acc.push(cur)
//   }
//   return acc;
// }, [])
// console.log(setValues)

// ❌ 중복 요소 제거(filter)
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
// const filterValues = values.filter((v, i, arr) => {
//   return arr.indexOf(v) === i;
// })
// console.log(filterValues)

// 🌟🌟🌟 중복 요소 제거(set)
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
// const setvalues = new Set(values);
// console.log([... setvalues]);

// 객체의 값 더하기
// const products = [{
//     id: 1,
//     price: 100
//   },
//   {
//     id: 2,
//     price: 200
//   },
//   {
//     id: 3,
//     price: 300
//   }
// ];

// const productsSum = products.reduce((acc, cur) => {
//   // return acc + cur["price"];
//   return acc + cur.price;
// }, 0)
// console.log(productsSum)