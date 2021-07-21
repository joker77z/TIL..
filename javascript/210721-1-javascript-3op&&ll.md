# javascript

## 삼항연산자

```js
const array = [];
let text = '';
if (array.length === 0) {
    text = '배열이 비어있습니다.';
} else {
    text = '배열이 비어있지 않습니다';
}
```

### 삼항연산자 사용방법, 줄바꿈 방법
```js
const array = [];
let text = array.length === 0 
    ? '배열이 비어있습니다.' 
    : '배열이 비어있지 않습니다.';
console.log(text);
```

### 삼항연산자 중첩방법

이런 코드는 차라리 if문 사용하는게 낫다.
삼항연산자는 왠만하면 1번만 사용.

```js
const condition1 = false;
const condition2 = false;

const value = condition1
    ? '와우'
    : condition2
        ? 'blabla'
        : 'foo'

console.log(value); // 'foo'
```

<br>

## Truthy and Falsy 한 값

문법보단 개념에 가깝다.

Truthy : True같은 것

```js
function print(person) {
    console.log(person.name);
}

const person = {
    name: 'John'
};

print(person);
```

위 코드에서 print부분에 인자값을 아무 것도 주지 않았거나 person객체가 null일 경우에 콘솔창에 오류가 발생하는데 오류가 발생하지 않기 위해서 아래와 같이 undefined일 경우, person일 경우 return;을 넣어서 끝내버리게 할 수 있으나 굉장히 비효율적이다.

```js
function print(person) {
    if(person === undefined || person === null) {
        return;
    }
    console.log(person.name);
}

const person = {
    name: 'John'
};

print(person);
```

이럴 때 쓸 수 있는 것이 `Truthy`, `Falsy`한 개념이다.

아래 예시처럼 javascript에서는 `undefined`와 `null`을 `falsy`한 값으로 보고있어서 `!`을 적용했을 때 `true`가 나오는 것을 볼 수 있다.
```js
console.log(!undefined) // true 
console.log(!null) // true 

// 마찬가지로 falsy한 값
console.log(!0); // true
console.log(!''); // true
console.log(!NaN); // true
console.log(!false); // true

// NaN 만드는 방법 (Not a number)
const value = 1 /'asdf';
console.log(value); // NaN
```

위 예제에서 반대로하면 이제 `truthy`한 값들이다.
```js
console.log(!3); // false
console.log(!'hello'); // false
console.log(!['hello']); // false
console.log(![]); // false
console.log(!{}); // false
```

truthy 하면 true로 바꾸고
falsy하면 false로 바꾸는 문법
```js
const value = {};

const truthy = !!value; // false로 바꿨다가 다시 true로 바꾼다.
console.log(truthy); // true
```

<br>

## 단축 평가 논리 계산법

논리 연산자를 사용해서 코드를 짧게 쓰는 것을 의미

react할 때 조건부 렌더링할 때 쓴다.

```js
const dog = {
    name: '멍멍이'
};

function getName(animal) {
    if (animal) {
        return animal.name;
    }
    return undefined;
}

const name = getName(); // dog를 안넣어서 undefined
console.log(name);
```

위 코드를 아래코드처럼 단축하기.

아래 코드도 동일하게 만약 getName에 인자값을 안넣으면 undefined. 넣으면 '멍멍이'가 나온다.

```js
...
function getName(animal) {
    return animal && animal.name;
}
...
```

### 왜 작동할까?

**예시.**
```js
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // 'hello'
```
앞에 오는것이 falsy한 값이면 앞에 오는 값이 출력된다. 
뒤에는 쳐다보지도 않는다.

### 이런거 어디다가 쓸까?

object라는 변수가 객체를 제대로 가지고 있다면 출력.
제대로 가지고 있지 않다면 오류가 발생할 수 있는데 오류가 나지 않고 null이 발생할 수 있게 한다.

```js
// const object = { name : 'asdf' };
const object = null;

const name = object && object.name;
console.log(name);
```

### OR연산자

어떤 값이 falsy하다면 대체해줄 값을 정해줄 떄 매우 유용

```js
const namelessDog = {
    name: '',
}

function getName(animal) {
    const name = animal && animal.name;
    if(!name) {
        return '이름이 없는 동물입니다.';
    }
    return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

단축시켜보자.

```js
const namelessDog = {
    name: '',
}
function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}
...// 이름이 없는 동물입니다.
```

이름이 있다면?
```js
const namelessDog = {
    name: '뭉뭉이',
}
function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}
...// 뭉뭉이
```

정리해보자.

```js
console.log(false || 'hello'); // hello
console.log('' || 'hello'); // hello
console.log(null || 'hello'); // hello
console.log(undefined || 'hello'); // hello
console.log(0 || 'hello'); // hello
console.log(NaN || 'hello'); // hello

// --------------- truthy한 값이 온다면? -----
console.log(1 || '음?'); // 1
console.log([] || '음?'); // []
console.log('와아' || '음?'); // '와아'
console.log(true || '음?'); // true
```

앞에가 falsy하거나 false면 뒤에가 결과물이다.
앞이 truthy하거나 true면 뒤를 보지 않는다.
(and 연산자와 반대다.)

그래서 OR연산자는 주로 어떤 값이 없을 때 그거 대신에
이거 사용할래! 라고할 때 자주 사용하면 유용하다.