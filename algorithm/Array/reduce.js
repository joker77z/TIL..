//  κΈ°λ³Έ
// const num = [1, 2, 3, 4].reduce((acc, cur, i, arr) => {
//   return acc + cur;
// }, 0);
// console.log(num);

// π νκ· κ΅¬νκΈ°
// const values = [1, 2, 3, 4, 5, 6];
// const average = values.reduce((acc, cur, i, {
//   length
// }) => {
//   return i === length - 1 ? (acc + cur) / length : acc + cur;
// }, 0)
// console.log(average);

// β μ΅λκ° κ΅¬νκΈ° (Math.maxκ° λ μ μ©ν¨.)
// const values = [1, 2, 3, 4, 5];
// const max = values.reduce((acc, cur) => {
//   return acc > cur ? acc : cur
// }, 0);
// console.log(max)

// πππ μμμ μ€λ³΅ νμ κ΅¬νκΈ° (κ²°κ³Όλ¬Ό : κ°μ²΄)
// const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
// const fruitsCount = fruits.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   console.log(acc[cur])
//   console.log(cur)
//   return acc;
// }, {})
// console.log(fruitsCount)

// β μ€μ²© λ°°μ΄ ννν (flatλ©μλκ° λ μ μ©ν¨.)
// const values = [1, [2, 3], 4, [5, 6]];
// const flatten = values.reduce((acc, cur) => {
//   return acc.concat(cur);
// }, [])
// console.log(flatten);

// μ€μ²© λ°°μ΄ ννν (flat)
// const values = [1, [2, 3], 4, [5, 6]];
// const flatten = values.flat();
// console.log(flatten)

// β μ€λ³΅ μμ μ κ±°
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

// β μ€λ³΅ μμ μ κ±°(filter)
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
// const filterValues = values.filter((v, i, arr) => {
//   return arr.indexOf(v) === i;
// })
// console.log(filterValues)

// πππ μ€λ³΅ μμ μ κ±°(set)
// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
// const setvalues = new Set(values);
// console.log([... setvalues]);

// κ°μ²΄μ κ° λνκΈ°
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