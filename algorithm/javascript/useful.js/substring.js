// 문자열은 원본 문자열이 변하지 않는다. slice, substring 이런걸로 원본이 변하지 않는다.



const str = 'hello world';

// substring
// 문자열.substring(시작인덱스, 끝나는인덱스) 시작인덱스 ~ 끝나는인덱스-1까지 보여준다.
// 끝나는 인덱스를 안써주면 시작인덱스~ 끝나는인덱스까지 보여준다.

test = str.substring(0, str.indexOf(' '))
test2 = str.substring(str.indexOf(' ')+1, str.length)
test3 = str.substring(str.indexOf(' ')+1)
console.log(test) // hello
console.log(test2) // world
console.log(test3) // world

// slice는 -를 적용할 수 있다.
test4 = str.slice(-5) // world
console.log(test4)