// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

let a = [1, 2, 3];
let a_reduce ;

a_reduce = a.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc+cur;
}, 0)

console.log(a_reduce);


// map.js 예제를 바꾼다. reduce로 바꾼다.
/*
let a = [1, 2, 3];
const a_mapping = a.map(el => {
    if(el%2==0) {
        return "짝수입니다."
    } else {
        return "홀수입니다."
    }
})
*/

const b = [1, 2, 3];
const b_reduce = b.reduce((acc, cur, i) => {
    acc.push(cur % 2? '홀수' : '짝수');
    return acc; // acc에 push하고 return 중요
}, [])

console.log(b_reduce);

const c = [1, 2, 3];
const c_reduce = c.reduce((acc, cur) => {
    if(cur%1===0)  {
        acc.push(cur);
        some
    }
    if(cur%2===0) acc.push(cur);
    return acc;
}, [])

console.log(c_reduce);