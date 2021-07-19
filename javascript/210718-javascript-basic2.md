# Javascript

## Array
배열은 여러가지 타입을 담을 수 있다.
배열안에 객체도 담을 수 있다.

```js
const array = [
    {name: '멍멍이'}, {name: '야옹이'}, [1, 2, 3, 4], true, 1
];
```

### array에 push 방법
```js
const array = [
    {name: '멍멍이'}, {name: '야옹이'}
];

array.push({name: '뭉뭉이'});

console.log(array); // [Object, Object, Object] 3개의 객체가 들어있다.

console.log(array.length); // 3
```

<br>



## 반복문
### for
기본
```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

reverse
```js
for (let i = 10; i > 0; i--) {
    console.log(i);
}
```

2씩 빼기
```js
for (let i = 10; i > 0; i-=2) {
    console.log(i);
}
```

```js
const names = ['멍멍이', '야옹이'];

for(let i = 0; i<names.length; i++) {
    console.log(names[i]);
}

```

<br>

### while
`while(조건문)`
조건문을 반복할동안은 계속 반복한다.

```js
let i = 0; // 반복문의 밖

while(i<10) {
    console.log(i);
    i++; // 이런건 for문으로 사용한다.
}
```

보통 while문은 true/false로 나뉘거나 좀 더 까다로운 조건에 사용.

아래 예시에서 isFun이 계속 false이기 때문에 숫자를 더해가고 30이 됬을 때 True로 변하면서 반복문을 탈출한다. 그래서 console.log에 29까지 출력된다.

```js
let i = 0;
let isFun = false;

while (isFun === false) { // !isFun과 같다.
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;
    }
}
```

### for - of (주로 배열을 다룰 때 사용)

배열안에 있는 것들을 하나씩 가져온다.

```js
const numbers = [10, 20, 30, 40, 50];

for (let number of nubmers) {
    console.log(number);
}

// 10
// 20
// 30
```

### Object.entries(객체), keys, values

```js
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}

console.log(Object.entries(doggy))
// [Array[2], Array[2], Array[2]] ▼
// 0: Array[2] ▼
// 0: "name"
// 1: "멍멍이"

console.log(Object.keys(doggy))
// ["name", "sound", "age"]
console.log(Object.values(doggy))
// ["멍멍이", "멍멍", 2]
```

### for - in (주로 객체를 다룰 때 사용)

```js
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for (let key in doggy) {
  console.log(key)
}

// name
// sound
// age
```

```js
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`)
}

// name: 멍멍이
// sound: 멍멍
// age: 2
```

### continue와 break
while, for-of, for-in에서 다 쓸 수 있다.
continue 가 들어가있으면 그 다음부터 반복문이 다시 실행.
```js
for (let i = 0; i < 10 ; i++) {
    if(i === 2) continue;
    console.log(i);
}
```

break를 만나면 바로 바깥으로 나간다.
```js
for (let i = 0; i < 10 ; i++) {
    if(i === 2) continue;
    console.log(i);
    if(i === 5) break;
}
```

## 연습과 퀴즈
배열 다 더하기
```js
function sumOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);
```

3이상 배열 새로운 배열로 출력하기
```js
function biggerThanThree(numbers) {
  let newArray = [];
  for (let i = 0 ; i < numbers.length ; i++ ) {
    if (numbers[i] > 3) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers))
```