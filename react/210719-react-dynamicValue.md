# INDEX
- [react](#react)
  * [react 동적으로 값 변화하기](#react------------)
    + [함수형 업데이트](#--------)
  * [input 상태 관리하기](#input--------)
  * [여러 개의 input 상태 관리하기](#------input--------)
    + [혼자 복습! 연습해보기](#------------)

<hr>

# react

react16.8이전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었다.
이후 hooks가 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다.
useState는 react의 hooks중 하나이다.
카운터 기능을 구현해보자.

## react 동적으로 값 변화하기

*App.js*
```js
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <Counter />
  )
}

export default App;
```

*Counter.js*

주석 참고.

```js

import React, {useState} from 'react'; // 여기는 중괄호 useState

function Counter() {
    // 배열구조할당을 이용한 것인데 첫번째 원소를 number에 할당, 두번째 원소를 setNumber에 할당.
    // number의 기본값을 0으로 설정한다. useState(0)
    // useState는 2가지 원소를 반환하는데 첫번째 변화할 값, 두번째 바꾸는 함수.
    // setNumber는 number를 업데이트 해주는 것이 된다.
    const [number, setNumber] = useState(0);

    // 함수(setNumber)에다가 새로운 값을 할당해주면 number값이 바뀌는 것.
    function onIncrease = () => {
        return setNumber(number+1)
    }

    function onDecrease = () => {
        return setNumber(number-1)
    }

    return (
        <div>
            <div>{number}</div>
            {/* 함수를 중괄호로 감싸준다. */}
            {/* react에서는 중간에 대문자를 쓴다. */}
            {/* 함수이름을 호출할 때 ()를 붙이면 안된다. ()붙이면 렌더링될 때 호출된다. */}
            {/* 함수를 넣어주는 거지 호출하는것이 아니다. html에서는 호출하기도 하는데 react의 jsx에서는 그렇지 않다. */}
            {/* 함수 그대로를 넣어줘야 한다 */}
            <button onClick={onIncrease}>+1</button> 
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

import default Counter;

```

### 함수형 업데이트

*Counter.js*

이전의 값을 참고해서 업데이트 되게 할 수도 있다. (이 방법이 옳은 방법)

setNumber에 아예 어떤 값으로 바꿀꺼야! 하는 다음 상태를 넣어줄 수도 있고

아래 예시처럼. 상태를 업데이트할꺼야 하고 함수를 넣어줄 수도 있는 것이다.

```js
import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    function onIncrease = () => {
        return setNumber(prevNumber => prevNumber+1)
    }

    function onDecrease = () => {
        return setNumber(prevNumber => prevNumber-1)
    }

    return (
        <div>
            <div>{number}</div>
            <button onClick={onIncrease}>+1</button> 
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

import default Counter;
```

<br>

## input 상태 관리하기

1. input창에 데이터를 입력하면 바로 아래 `값:` 부분에 input에 입력한 값이 나온다.
2. reset을 누르면 input창과 아래 `값:` 부분이 초기화 된다.

*InputSample.js*
```js
import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        // 입력창에 실시간으로 변하는 값을 볼 수 있다.
        setText(e.target.value);
    }
    return (
        <div>
            <input onChange={onChange}> />
            <button>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    )
}

export default InputSample;
```

<br>

## 여러 개의 input 상태 관리하기

```js
import React, {useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })
    const {name, nickname} = inputs;

    const onChange = (e) => {
        // e.target.name과 e.target.value에서 앞에 e.target을 중복으로 앞으로 쓰기 싫어서 선언
        const {name, value} = e.target;

        // 리액트에서 객체 업데이트할 때 
        // 1. 기존의 객체를 복사.
        const nextInputs = {
            ...inputs, // inputs객체 안에 있는 내용 name:'', nickname:''이 들어온다.

            // 밖에서 nextInputs[name] = value; 을 선언할 필요없이 여기 안에서 덮어쓰기 할 수 있다.
            // 이렇게 하면 name이 무엇을 가리키고 있냐에 따라 그것이 바뀐다.
            // 예를 들어 e.target이 지금 name을 가리키고 있으면 [name]은 name이고
            // nickname을 가리키고 있으면 [name]은 nickname이다.
            [name]: value,
        };

        // 업데이트 된 내용으로 set된다.
        setInputs(nextInputs);
        
    }
    const onReset = () => {
    }
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                이름 (닉네임)
            </div>
        </div>
    );
}

export default InputSample;
```

화면에 출력 전

따로 `nextInputs`로 빼지 않고 `setInputs`에 넣어줄 수 있다.

```js
import React, {useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
        
    }
    const onReset = () => {
    }
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                이름 (닉네임)
            </div>
        </div>
    );
}

export default InputSample;
```

최종 : 화면에 출력

> ✨ 어려운 부분이기 때문에 여러번 반복해서 학습하자.
> 특히 상태 업데이트 부분인 `setInputs`에서 spread문법을 사용해서 가져온 다음 `[name]: value`로 덮어쓰는 형식을 유의깊게 보자. 

> 나중에 배열상태를 관리하게 될 때도 마찬가지로 해야하며
이렇게 함으로서 불변성을 지켜야 컴포넌트 업데이트 성능 최적화 가능하다.
```js
import React, {useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
        
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    }
    return (
        <div>
            <input name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}/>
            <input name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
```

### 혼자 복습! 연습해보기

```js
import React, {useState} from 'react';

function InputSample() {
    const [inputs, setText] = useState({ // 대괄호
        name: '',
        nickname: ''
    })
    const {name, nickname} = inputs; // 분해 구조 할당

    const onChange = (e) => {
        const {name, value}= e.target // name, value
        
        setText({
            ...inputs,
            [name]: value // 받아오는 값에 따라 변하는 부분
        })
    }

    const setReset = () => {
        setText({
            name: '',
            nickname: ''
        })
    }
    return (
        <div>
            <input name="name" onChange={onChange} value={name}/>
            <input name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={setReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;
```

복습하고 또 한번 바로이어서 복습했더니 성공!