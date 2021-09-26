// flatMap
// 배열을 평탄화한다.
// map 메서드와 flat메서드를 순차적으로 실행하는 효과가 있다.

// flatMap 메서드는 1단계 평탄화만 가능하다.
// 그에 반해 flat은 깊이를 지정할 수 있다.

// 즉, 깊이를 정해야 하면 flat을 , 깊이 정할 필요가 없으면 flatMap을 사용하자.

const arr = ['hello', 'world'];

const arrMap = arr.map(x => x.split('')).flat()
console.log(arrMap)

const arrMap2 = arr.flatMap(x => x.split(''));
console.log(arrMap2)