# javascript

## 배열 내장함수

### forEach
```js
const superheroes = ['아이언맨', '캡틴 아메리카', '토르]

function print(hero) {
    console.log(hero);
}

superheroes.foreach(print)
``` 
forEach문 안에 함수를 넣어서 더 짧게 가능하다.

```js
superheroes.forEach(function(hero) {
    console.log(hero);
})
```

화살표 함수로 변경 가능.
```js
superheroes.forEach(hero => {
    console.log(hero);
});
```

### map
map은 전체적으로 변화시켜 주려고 할 때 사용한다.

새로운 배열에 제곱된 값들을 넣기

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];

// forEach 사용
array.forEach(el => {
    squared.push(el*el);
})
```

map사용

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = array.map(el => el*el);
console.log(squared);
```

원하는 부분만 출력하기
```js
const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(el => el.text);
console.log(texts);
```

### indexOf
찾고자하는 `배열안의 요소를 입력`해서 `인덱스 번호`를 반환받는다.
indexOf를 했는데 없다면 -1이 나온다.

```js
const superheores = ['아이언맨', '캡틴 아메리카', '토르'];

const index = superheores.indexOf('캡틴 아메리카');
console.log(index); // 1
```

### findIndex
배열안에 있는 것이 숫자나 문자나 불리언일 때 충분히 indexOf로 할 수 있으나
근데 안에 들어가있는 것이 객체이거나 `조건`으로 찾는다면 indexOf로 불가능 하다.

아래에서 id가 3인 것을 찾으려면?
```js
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
]
```

정답

특정 `조건`을 검색해서 `인덱스 번호`를 반환해준다.
```js
const index = todos.findIndex(todo => todo.id === 3)
console.log(index);
```

### find

find는 `조건`으로 검색하는데 찾은 `그 값 자체`를 반환한다.
위 예제에서 `findIndex`를 `find`로만 고쳐봐도 알 수 있다.

```js
const index = todos.findIndex(todo => todo.id === 3)
console.log(index);
```

> indexOf, findIndex, find 다 첫번째로 찾은 것을 알려준다.

*정리*
1. indexOf는 배열요소를 `값 자체`로 검색하는데 `인덱스` 번호로 반환해준다.
2. findIndex는 배열요소를 `조건`으로 검색하는데 `인덱스` 번호로 반환해준다.
3. find는 배열요소를 `조건`으로 검색하는데 `값`으로 반환해준다.

### filter

`조건`을 `만족하는 것들`을 찾아 `새로운 배열`을 만든다. 필터링 생각하면 된다.

```js
const tasksNotDone = dotos.filter(el => el.done === false) 
// el.done === false는 !el.done 과 같다.
// el.done === true는 el.done과 같다.
console.log(tasksNotDone);
```

### splice

`배열.splice(인덱스 번호, 지울 개수)`

인덱스 번호를 알기 위해 indexOf로 먼저 번호를 인덱스를 찾고 splice로 해당 인덱스 번호의 값을 정한 개수만큼 지운다.

그리고 지운것들을 따로 배열로 빼낼수도 있다.

```js
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2);
console.log(numbers); // [10, 20]
console.log(spliced); // [30, 40]
```

### slice

❌ splice와 다르게 slice는 `기존의 배열을 건드리지 않는다.`

필요한 부분만 복사한다고 생각하자.

`배열.slice(시작 인덱스 번호, 빼낼 인덱스 번호+1)`

```js
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2);
console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40] 그대로 남아있다.
```

### shift

`기존의 배열을 수정`

shift는 `첫번째` 원소를 빼낸다. 계속 shift하면 맨 앞에 있는 원소 계속 꺼낸다.

```js
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); // 10
console.log(numbers); // [20, 30, 40]
```

### pop
`기존의 배열을 수정`
shift랑 비슷한데 pop은 `뒤에서` 하나씩 뺀다. 이것도 계속 pop하면 빈 배열될때까지 빠진다.

```js
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); // 40
console.log(numbers); // [10, 20, 30]
```

### unshift
맨 앞에 원소를 추가

```js
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30, 40]
```

***짝을 지어주자면***
- 맨 앞 원소를 제거하는 shift와 맨앞에 원소를 추가하는 unshift가 짝.
- 맨 뒤 원소를 제거하는 pop과 맨 뒤에 원소를 추가하는 push가 짝.


### concat (배열을 펼쳐주는 spread를 사용해서도 가능)
여러개의 배열을 하나로 합쳐준다.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
// const concated = [...arr1, ...arr2]
console.log(concated); // [1, 2, 3, 4, 5, 6]
```

### join

배열안에 있는 값들을 문자열 형태로 합쳐줄 때 사용
파라미터에 separator를 넣을 수 있다.

```js
const array = [1, 2, 3, 4, 5]
console.log(array.join()); //1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```

### reduce

배열이 주어졌을 때 배열안의 모든값들을 사용해서 연산해야 할 때 사용

예를 들어서 배열안의 값들을 모두 더한다고 했을 때 기본적인 코드는 아래와 같다.
```js
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
    sum += n;
})

console.log(sum);
```

이거를 reduce를 사용하면 한 줄로 구현가능하다. 

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumlator, current) => accumlator + current, 0);
console.log(sum); // 15
```
*해설*

`accumlator`는 누적된 값을 의미한다.

1. 우선 초기값으로 설정한 0이 `accumlator`가 된다.
2. `current`. 각 원소들을 가리키는데 처음은 1이 된다.
3. => (0 + 1)이 되기 때문에 1이 `accumlator`가 된다.
4. 다시 1이 `accumlator`가 된다. 그다음 numbers에 있는 요소인 2가 `current`로 들어온다.
5. => (1 + 2) 결과값 3이 다음 `accumlator`가 된다.

이런식으로 반복해서 원소의 끝까지 current로 나오고 결과를 반환해줘서 15가 된다.

<br>

**accumlator와 current에 이어 index와 array까지 받아올 수 있다.**

- `index`는 `current`로 원소를 가져올 때 몇번째 index인지를 알려준다.
- `array`는 자기자신의 배열을 가리킨다.
```js
const numbers = [1, 2, 3, 4, 5];
const avg = numbers.reduce((accumlator, current, index, array) => {
    if (index === array.length-1) { // 마지막 원소라면
        return (accumlator + current) / array.length;
    }
    // 그 외
    return accumlator + current // 다음 acc가 될 값을 위해 계속 반환
}, 0);
console.log(avg); // 이렇게 하면 sum이 아니고 avg 계산값이다. 3이 나온다.
```

*해설*
  
1. `accumlator` 0으로 시작.
2. current에 1이 들어오고 return 0 + 1로 인해 `acc` 1이 되고
3. 1+2 = 3
4. 3+3 = 6
5. 6+4 = 10
6. if조건에 의해 index가 4가 된다. 10+5 / 5 = 3이 되서 return 3.

#### reduce 다른 예시

숫자가 아니더라도 사용할 수 있다.
배열안에 알파벳들이 개수가 몇개씩 있는지 숫자를 세서 `새로운 객체`에다가 결과를 넣어줄 것.

```js
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc, current) => {
    // acc['a'] 즉, acc.a와 같은 표현. 이미 acc에 'a'가 들어왔기 때문에 true
    if (acc[current]) { 
        acc[current] += 1
    } else {
        acc[current] = 1
    }
    return acc;
}, {}) // 기본값으로 0이 아니라 기본 객체를 넣어준다.

console.log(counts);
```

*해설*
1. acc가 {}로 시작.
2. if(acc['a']). acc에 'a'가 있는지 찾는다. 없다! -> false
acc['a'] = 1
```js
acc = {}
```
▼
```js
acc = {
    'a': 1
}
```
3. if(acc['a']) 다시 'a'가 있는지 찾는다. 있다! -> true
```js
acc = {
    'a': 2
}
```
 
<br>

### 배열 내장 함수 총정리. 복습과 퀴즈

- forEach: 배열의 각 원소들을 하나씩 호출할 수 있었다.
- map: 배열의 원소들을 다른 형태로 변환해야될 때 사용. 매핑해서 새로운 변수배열에 삽입

- indexOf: 특정 값이 어디에 있는지. 인덱스값으로 반환
- findIndex: 조건을 통해 만족하는 것이 몇번째인지 찾는다.
- find: 찾은 것 자체 값을 반환.

- filter: 조건을 만족하는 것들로 새로운 배열을 만들 때 사용
- splice: 특정 인덱스에서 몇개를 지우는 것. (기존 배열에 변화o)
- slice: 특정 인덱스부터 ~ 특정인덱스까지 짤라낸다. (기존 배열에 변화x)

- shift: 맨 앞(왼쪽)을 밖으로 꺼내기. (기존 배열 변화o)
- pop: 맨 뒤(우측)을 밖으로 꺼내기. (기존 배열 변화o)
- unshift: 맨 앞에 더하기 (기존 배열 변화o)

- concat: 배열 2개를 합쳐서 새로운 배열을 만든다.
- join: 특정 separate를 사용해서 배열->문자열로 만든다.

- reduce: acc값(누적되는 값)을 사용해서 초기값을 세팅하고 반복하면서 총 합을 구하는 함수.

### 퀴즈

reduce를 이용해서 해답 보지 않고 스스로 풀기 성공. 

```js
function countBiggerThanTen(numbers) {
    return numbers.reduce((acc, cur) => {
        if (cur>10) {
            acc += 1
        }
        return acc
    }, 0)
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
```

forEach를 이용해서 해답 보지 않고 스스로 풀기 성공
```js
function countBiggerThanTen(numbers) {
    let sum = 0;
    numbers.forEach(el => {
       if(el>10) {
           sum += 1
       } 
    })
    return sum;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
```