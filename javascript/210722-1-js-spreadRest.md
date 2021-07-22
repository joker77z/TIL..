# javascript

## spread

ES6에 도입된 spread와 rest.

spread : 펼치다, 퍼뜨리다.

객체와 배열을 퍼뜨릴 수 있다.

객체, 배열, 함수 인자에서 사용 가능하다.

### 객체

```js
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

console.log로 찍어보니 3개 다 다르다.

만약에 spread방법이 아니라 다른방법으로 각 객체에 요소를 추가하려고 했다면 아래와 같을 것이다.

```js
const slime= {
    name: '슬라임'
}

const cuteSlime = slime;
slime.attribute = 'cute';

const purpleCuteSlime = cuteSlime;
purpleCuteSlime.color = 'purple';

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(slime === cuteSlime) // true
```

🔺 3개 다 동일한 객체가 된다.

spread연산자의 위치에 따라 아래 예시처럼 덮어쓰게 되니 유의하자.
```js
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
}

const greenCuteSlime = {
    ...purpleCuteSlime, // 이게 먼저왔으니까 속성이 먼저들어오고나서
    color: 'green' // color값을 덮어쓰게 된다.
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);
```

### 배열

```js
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기']
// const anotherAnimals = animals.concat('비둘기')
```

spread를 여러번 사용도 가능하다.
```js
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기', ...animals]
```

## rest

spread와 생김새는 비슷하다.

둘 다 `...`을 사용하지만 역할이 다르다.

✅ rest는 객체, 배열, 함수의 파라미터에서 사용할 수 있다.

spread는 객체나 배열안에 퍼뜨리는 역할을 한다면 rest는 퍼져있는 것을 다시 모아오는 역할을 한다.

### 객체

```js
const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple"
};

// const { color, ...rest } = purpleCuteSlime;
const { color, ...cuteSlime } = purpleCuteSlime;
// console.log(color, rest);
console.log(color, cuteSlime);

const {name, ...attribute} = cuteSlime;
console.log(name, attribute);
```

### 배열

```js
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(one, two, rest)
```

> ❌ 주의할 점은 rest를 앞에다가는 쓸 수 없다는 것

## 함수 파라미터에서의 rest

```js
function sum(...rest) {
  // let sum = 0;
  // rest.forEach((el) => {
  //   sum += el;
  // });
  // return sum;

  // return rest.reduce((acc, current) => {
  //   return acc + current;
  // }, 0);

  return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
```

### 함수의 인자에서 spread연산자를 사용하는 방법

```js
function subtract(x, y) {
  return x - y;
}

const numbers = [1, 2];
const result = subtract(...numbers); // 인자에 배열들을 
console.log(result);
```

```js
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sum(...numbers));
```

## 퀴즈: 최대값 구하기

```js
function max(...rest) {
  let maxNum = rest[0];
  rest.forEach((el) => {
    if (el > maxNum) {
      maxNum = el;
    }
  });
  return maxNum;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);

// 테스트 코드에서 불러오기 위하여 사용하는 코드
export default max;

```