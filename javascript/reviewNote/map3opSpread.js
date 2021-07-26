
const people = [
    { name: '박지성', age: 36, hobby: '등산', agegroup: null },
    { name: '김연아', age: 31, hobby: '수영', agegroup: null }
]

// age가 35미만인 사람은 'A'
// age가 35이상인 사람은 'B'를 agegroup값으로 갖는 배열을 만들어서 answer라는 변수에 할당.

let answer = [];

answer = people.map(function(el) {
    el.age >= 35 ? el.agegroup = 'B' : el.agegroup = 'A';
    return el;
})

console.log(answer)

