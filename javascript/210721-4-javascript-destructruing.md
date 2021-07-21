# javascript

## 비구조화 할당

```js
const object = {a: 1, b: 2};

function print({a, b}) {
    console.log(a);
    console.log(b);
}

print(object);
```

*b가 없다면?*

b가 주어지지 않으면 undefined로 나타난다. 기본값을 주고 undefined를 방지하기 위해 아래와 같이 가능하다.
```js
const object = {a: 1};

function print({a, b}) {
    console.log(a);
    console.log(b || 2);
}

print(object);
```

이 보다 더 제대로된 방법이 있다.

```js
const object = {a: 1};

function print({a, b = 2}) {
    console.log(a);
    console.log(b);
}

print(object);
```

이건 꼭 함수에서만 사용할 수 있는 건 아니다. 비구조 할당을 아래와 같이 할 수 있다.

```js
const object = {a: 1};

const {a, b = 2} = object
console.log(a); // 1
console.log(b); // 2
```

### 이름을 바꿔보자.
```js
const animal = {
    name: '멍멍이',
    type: '개'
};

const nickname = animal.name;
console.log(nickname); // 멍멍이
```

위 코드는 아래와 같이 변경 가능하다.

**비구조 할당사용** : 원래 이름을 새로운 이름으로 바꿔줄 수도 있다는 것! 그렇다고 해서 원래 객체에서 이름이 바뀌는 건 아니다.

```js
const animal = {
    name: '멍멍이',
    type: '개'
};

const {name: nickname} = animal;
console.log(nickname); // 멍멍이
console.log(animal); // name, type 원래것 그대로 나온다.
```

### 배열 비구조 할당

객체뿐만 아니라 배열에도 할 수 있다.

```js
const array = [1, 2];

const one = array[0];
const two = array[1];

console.log(one, two); // 1, 2
```

이렇게 할 수 있다.
```js
const array = [1, 2];
const [one, two] = array;
console.log(one, two); // 1, 2
```

기본값도 할당 가능하다.
```js
const array = [1];
const [one = 1, two = 2] = array;
console.log(one, two); // 1, 2
```

### 객체의 깊숙한 곳에 있는 것을 꺼내는 방법을 알아보자.

```js
const deepObject = {
   state: {
       information: {
           name: 'velopert',
           languages: ['korea', 'english', 'chinese']
       }
   },
   value: 5 
}
```

여기서 name, languages, value를 밖으로 꺼내고 싶다면?

두 가지 방법이 있다.

1. **비구조화 할당을 두 번 사용하는 것.**
    ```js
    ...

    const {name, languages} = deepObject.state.information;
    const {value} = deepObject;

    const extracted = {
        name, 
        languages, 
        value
    }
    console.log(extracted);
    ```

    특정 키 이름으로 선언된 값이 이미 있다면 value값 설정을 생략해도 된다. 아래 예시처럼 다 이렇게 안써주도 된단 의미.

    ```js
    const extracted = {
        name: name,
        languages: languages,
        value: value
    }
    ```

    🔻 languages안에 있는 것을 꺼낼수도 있다.
    ```js
    const {
        name, 
        languages: [first, second]
        } = deepObject.state.information;
    const {value} = deepObject;

    const extracted = {
        name, 
        first, second, 
        value
    }
    console.log(extracted);
    ```

 <Br>

2. **한번에 빼오는 방법**
    ```js
    ...

    const {
        state: {
            information: {
                name, languages
            }
        },
        value
    } = deepObject; // 여기가 포인트!

    const extracted = {
        name, languages, value
    }
    console.log(extracted);
    ```

    이걸 또 약간 변형시키면 최종은

    ```js
    const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korea', 'english', 'chinese']
        }
    },
    value: 5 
    }

    const {
        state: {
            information: {
                name, languages: [firstlan, secondlan, thirdlan]
            }
        },
        value
    }= deepObject

    const extracted = {
        name, firstlan, secondlan, thirdlan , value
    }
    console.log(extracted);
    ```

    > 이 방법이 되긴하지만 자주 사용하는 방법은 아니다. velopert님은 1번 방법을 더 선호한다고 함.