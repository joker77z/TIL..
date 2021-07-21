# javascript

## 함수의 기본 파라미터

원의 넓이를 구해보자.

```js
function calculateCircleArea(r) {
    return Math.PI * r * r;
}

const area = calculateCircleArea(4); // 50.xx
console.log(area);
```

위와같이 인자를 넣어줘야 하는데 안넣어주면?
기본값을 설정할 수 있다.

```js
function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * r * r;
}

const area = calculateCircleArea(); // 50.xx
console.log(area);
```

ES6의 기본값 지정을 쓸 수 있다. `(r = 1)`

```js
function calculateCircleArea(r = 1) {
    // ✅ 화살표함수에서도 쓸 수 있다.
    // const calculate = (r = 1) => ..
    return Math.PI * r * r;
}

const area = calculateCircleArea(); // 50.xx
console.log(area);
```