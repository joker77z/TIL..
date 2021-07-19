# Javascript

## 객체 안에 함수 넣기
`say: function say()`
`say: function()`
`say()`
이 3개는 똑같다.

```js
const dog = {
    name: '멍멍이',
    sound: '멍멍',

    // say: function()
    // say()
    say: function say() {
        console.log(this.sound)
    }
}

dog.say()
```

### 화살표 함수는 this가 다르다.
화살표 함수를 사용하면 this가 자기 자신을 가르키지 않는다.
아래는 오류 코드다.

```js
const dog = {
    name: '멍멍이',
    sound: '멍멍',

    say: () => {
        console.log(this.sound) // undefined
    }
}

dog.say()

```


### 다른 객체의 함수 안에도 넣을 수 있다.
객체 안에 있는 함수를 밖으로 꺼내는 순간 this와의 관계가 끊어진다.

```js
const dog = {
    name: '멍멍이',
    sound: '멍멍',
    say() {
        console.log(this.sound)
    }
}

const cat = {
    name: '야옹이',
    sound: '야옹'
}

cat.say = dog.say
cat.say()

```

<br>

## 객체 안에 getter와 setter를 설정할 수 있다.
getter와 setter를 쓰면 특정 값을 바꾸거나 조회할 때 사용할 수 있다.

### getter

```js
const numbers = {
    a: 1,
    b: 2,
    get sum() { // get 함수형태로 선언한다.
        console.log('sum함수 실행');
        return this.a + this.b; // 어떤 값을 반드시 반환해야한다.
    }
};

console.log(numbers.sum);
```

getter는 조회하려고 할 때. 연산된 값을 받아서 조회할 때 사용

### setter

```js
const dog = {
    _name: '멍멍이', //setter함수와 겹치지 않게 아래바 붙혀줌.
    set name(value) { // 파라미터를 반드시 설정해줘야 한다.
        console.log('이름이 바뀝니다.' + value);
        this._name = value;
    }
}

dog.name = '뭉뭉이'; // 이름이 바뀝니다. 뭉뭉이
console.log(dog.name) // 뭉뭉이

```

### getter와 setter의 이름을 동일하게 할 수 있다.
dog.name을 하면 `get함수`가 불러와지고
dog.name = 'value' 를 입력하면 `set함수`가 불러와진다.

```js
const dog = {
    _name: '멍멍이',
    get name() {
        console.log('_name을 조회합니다.');
        return this._name;
    }
    set name(value) {
        console.log('이름이 바뀝니다.' + value);
        this._name = value
    }
}

console.log(dog.name);
// _name을 조회합니다.
// 멍멍이

dog.name = '뭉뭉이';
// 이름이 바뀝니다. 뭉뭉이

console.log(dog.name);
// _name을 조회합니다.
// 뭉뭉이

```

### 응용: 계산기의 효율적인 예와 비효율적인 예

✅ 좋은 예 : 조회할 때마다 더하는 것이 아니라 set함수로 변수의 값을 새로 할당할 때마다 미리 계산하도록 한다.
이 예제에서는 조회하기 위한 getter가 세팅은 되었지만 사용되지 않았다.
```js
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('계산 업데이트');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}

numbers.a = 5;
// 계산 업데이트

numbers.b = 7;
// 계산 업데이트

console.log(numbers.sum) // 12
```

❌ 아래는 sum을 조회할 때마다 계속 계산(더하는)하는 안좋은 예다.
```js
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum');
        return this.a + this.b;
    }
}

numbers.a = 3
numbers.b = 5
console.log(numbers.sum); 
// sum
// 8
console.log(numbers.sum);
// sum
// 8
console.log(numbers.sum);
// sum
// 8
```