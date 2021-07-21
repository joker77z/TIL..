# javascript
## includes

```js
function isAnimal(text) {
    const animals = ['고양이', '개'];
    return animals.inclues(text);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```

### 한 줄로 줄이기

```js
const isAnimal = (text) => ['고양이', '개'].inclues(text);
...
```

#### 코드 줄여보기 연습
```js
function getSound(animal) {
    if(animal === '개') return '멍멍!';
    if(animal === '고양이') return '야옹!';
    if(animal === '참새') return '쨱쨱!';
    if(animal === '비둘기') return '구구!';
    return '...?';
}

console.log(getSound('개')); // 멍멍!
```

🔺 if문이 너무 많다.

🔻 switch문을 쓴다해도 효율적으로 줄일 수 있는 것은 아니지만 한번 사용해보자. 오히려 if문이 더 낫다.

```js
function getSound(animal) {
    switch(animal) {
        case '개':
            return '멍멍';
        case '고양이':
            return '고양';
        case '참새':
            return '쨱짹';
        case '비둘기':
            return '구구';
        default:
            return '...?'
    }
}

console.log(getSound('개')); // 멍멍!
```

🔻 더 깔끔하게 해보자. 객체를 활용한다.!

❗️ return부분을 잘보자. `sound[animal]` 대괄호를 썼다.

```js
function getSound(animal) {
    const sounds = {
        개: '멍멍',
        고양이: '야옹'
    }
    return sounds[animal] || '...?';
}

console.log(getSound('고양이')); // 야옹 
```

또 다른 방법으로 객체에다가 함수를 사용하는 식으로 해보자.

```js
function makeSound(animal) {
    const tasks = {
        개() {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹이');
        },
        비둘기() {
            console.log('구구');
        }
    }
    if(!tasks[animal]) {
        console.log('...?');
        return;
    }
    tasks[animal]()
}

makeSound('개');
makeSound('책상');
```

중복 코드를 제거해본다.

```js
...

const task = tasks[animal]
if(!task) {
        console.log('...?');
        return;
    }
    task();
}
```

> ✨ 이렇게 객체를 활용하면 보기 좋은 코드를 만들어낼 수 있을 것이다!