# INDEX

- [Javascript](#javascript)
  * [연습 방법](#-----)
  * [변수와 상수](#------)
    + [변수 let](#---let)
    + [상수 const](#---const)
    + [null, undefined](#null--undefined)
  * [연산자](#---)
    + [비교연산자](#-----)
  * [조건문](#---)
    + [if, else, else if](#if--else--else-if)
    + [switch 문](#switch--)
  * [함수](#--)
  * [ES6 ECMAScript6, ES2015](#es6-ecmascript6--es2015)
    + [template literal](#template-literal)
    + [arrow function](#arrow-function)
  * [객체](#--)

---

<br>

# Javascript
electron으로 데스크탭 프로그램을 만들수도 있다.
react native, nativescript로 모바일용으로도 만들 수 있다.
node.js로 javascript를 사용할 수 있기 때문에 iot에서도 사용할 수 있다.

https://learnjs.vlpt.js 참조

<br>

## 연습 방법
codesandbox에서 주황색(vanaila script)을 통해서 javascript 자체만 사용할 수 있다.
크롬에서 벗어나 codesandbox 자체를 설치할 수 있다.
크롬 우측 상단 점 3개를 누르면 code sandbox 설치가 있다.

<br>

## 변수와 상수
var은 이제 사용하지 않는다.
구형 브라우저에서는 let과 const를 못 쓰지만 babel을 이용해서 구형 브라우저에서도 작동할 수 있도록 할 수 있다.

<br>

### 변수 let
변수는 바꿀 수 있는 값.
```javascript
let value = 1
value = 2

// 이건 오류!
let value = 1
let value = 2
```

### 상수 const
```javascript
const value = 1
value = 2 // 오류
``swd`

### 문자열 선언
취향 차이에 따라 작은 따음표, 큰 따음표를 사용할 수 있다.
pretier을 이용해서 따음표나 세미콜론을 규칙적으로 나오게 할 수 있다.
```javascript
let text = 'hello';
let name = "hello";
```

### null, undefined
null이나 undefined의미가 좀 다르다.
`null`은 진짜 없다. 
`undefined`은 아직 정해지지 않았다라는 의미!
```
let criminal
console.log(criminal) // undefined
```

<br>

## 연산자
```javascript
//미리 계산을하고 보여주느냐 보여주고나서 계산하느냐 차이.
let a = 1
console.log(a++); // 1
console.log(a);  // 2
console.log(++a); // 3
```

### 비교연산자
`==` 이퀄싸인을 2개 쓰면 타입을 검사하지 않기 때문에 아래와 같은 경우 `true`다.
```javascript
const a = false
const b = 0;
const equals = a == b
console.log(equals)
```

왠만하면 `===`를 쓰면 된다. `==`은 쓸 경우 없다라고 생각하자.
반대로는 `!==`를 쓰면 된다. 마찬가지로 `!=`는 쓰지말자.

<br>

## 조건문
### if, else, else if
```javascript
const a = 1;
if (a + 1 === 2) {
    console.log('a+1은 2입니다.');
}
```

**다른 블록 스코프에 있는 예제**
(var를 쓰면 두 콘솔 다 2가 나온다. 꼬일가능성이 있어서 var를 쓰지 않는다.)

```js
const a = 1;
if (a + 1 == 2) {
    const a = 2;
    console.log(a); // 2
}
console.log(a); // 1
```

**if, else if, else**
```js
const a = 5;
if(a === 5) {
    console.log('5입니다.');
} else if (a === 10) {
    console.log('10입니다.');
} else if (a === 7) {
    console.log('7입니다.');
} else {
    console.log('5도 아니고 10도 아닙니다.');
}
// 5입니다.
```

### switch 문
```js
const device = 'iphone';

switch(device) {
    case 'iphone': 
        console.log('아이폰');
        break;
    case 'ipad':
        console.log('아이패드');
        break;
    case 'galaxynote':
        console.log('갤럭시노트');
        break;
    default:
        console.log('모르겠네요.');
// 아이폰
}
```
> 브레이크를 안쓰면 break있는데까지 다음 case문들을 실행한다.

<br>

## 함수
`function 함수명(param1, param2)` 이런식으로 사용한다.

ex1
```js
function add(a, b) {
    return a+b;
}

const sum = add(1, 2);
console.log(sum); // 3
```
ex2
```js
function hello(name) {
    console.log('hello' + name);
}

hello('taejoon') // hello taejoon
```

<br>

## ES6 ECMAScript6, ES2015
매년 새로운 자바스크립트 문법이 나온다.
템플릿 리터럴에 대해서 알아보자.
### template literal

```js
function hello(name) {
    return `hello ${name}!`;
}

const result = hello('taejoon');
console.log(result); // hello taejoon
```
> ❗️ 주의 : 함수에서 return이 되는 순간 함수는 종료된다.

추가 ex
```js
function getGrade(score) {
    if (score == 100) {
        reuturn 'A+';
    } else if (score >= 90) {
        reuturn 'A';
    } else if (score >= 80) {
        return 'B';
    }
    else {
        reuturn 'F';
    }
}
const grade = getGrade(83);
console.log(grade); // B
```

### arrow function
화살표 함수에 대해 알아보자.
ex1
```js
const add = (a, b) => {
    return a + b;
}

const sum = add(1, 2);
console.log(sum); // 3
```

ex2 : 한 줄로 사용 가능할 때 중괄호와 return을 사용하지 않았다.
```js
const add = (a, b) => a + b;

const sum = add(1, 2);
console.log(sum); // 3
```

> **일반 function**에서 쓰는 `this`와 **화살표 함수**에서 쓰는 `this`가 다르다.

<br>

## 객체
하나의 이름에 여러 종류를 넣을 수 있게 해준다.
키와 값으로 이루어진 형태로 만들 수 있다.
키에 공백을 넣으려면 `''`로 감싸준다.
ex1
```js
const dogname = '멍멍이';
const dogAge = 2;

// 아래와 같이 바꿀 수 있다.
const dog = {
    name: '멍멍이',
    age: 2,
    'so cute' = true
}

console.log(dog.name); // 멍멍이
console.log(dog.age); // 2
```

ex2 : *객체와 함수를 같이 사용해보기*
```js
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function printHero(hero) {
    console.log(`${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor}입니다.`);
}

printHero(ironMan)
printHero(captainAmerica)
```

<br>

**ES6의 비구조 할당(객체 구조 분해)를 사용하면 조금 더 편하게 사용할 수 있다.**

아래 예제에서는 파라미터값으로 받아온 hero를 분해해서 hero안에 있는 키 값들을 불러왔다.
순서를 바꿔도 상관없다. hero안에서 그대로 가져다가 쓰는 것이기 때문이다.

*개선1*
```js
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function printHero(hero) {
    const {name, actor, alias} = hero; // 분해하고 할당했다.
    console.log(`${alias}(${name})역할을 맡은 배우는 ${actor} 입니다.`)
}

printHero(ironMan)
printHero(captainAmerica)
```

*개선2*

```js
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function printHero({name, actor, alias}) { // 파라미터 자체에 분해한 것들이 들어왔다.
    console.log(`${alias}(${name})역할을 한 배우는 ${actor}입니다.`)
}

printHero(ironMan)
printHero(captainAmerica)
```

특정 값들을 객체에서 빼온다.
꼭 함수 내에서 쓸 필요는 없고 일반적인 환경에서도 사용할 수 있다.
```js
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

const {name} = ironMan;
console.log(name); // `${name} 이렇게 안써주고 name만 써줘도 된다.

```