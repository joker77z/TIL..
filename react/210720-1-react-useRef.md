# react

## useRef로 특정 DOM 선택하기

리액트에서는 ref를 사용하는데 함수형 컴포넌트에서 ref를 사용할 때는 useRef라는 Hook함수를 사용한다. 클래스형 컴포넌트에서는 React.createRef()를 사용.
지금은 함수형 컴포넌트에서 쓰는 useRef만 배운다. 이유는 지금은 클래스형 컴포넌트는 덜 중요하기 때문.

저번 예제에서 `초기화`를 눌렀을 때 focus가 input에 가게 하고싶다면 react 자체기능으로는 딱히 할 수 없어서 DOM에 직접 접근해야 한다.

1. {useRef}를 불러온다.
2. useRef 호출해주고 이거로 만든 객체를
3. ref의 값으로 호출해주고
4. 해당 dom을 선택하고 싶으면 .current하고 원하는 작업

dom선택하는거 말고도 렌더와 관련없는 변수를 관리할 수도 있는데 나중에 알아본다.

```js
import React, {useState, useRef} from 'react'; // 1. useRef도 불러온다.

function InputSample() {
    const [inputs, setInput] = useState({
        name: '',
        nickname: ''
    })
    const nameInput = useRef(); // 2. 작성
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target
        
        setInput({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInput({
            name: '',
            nickname: ''
        })
        nameInput.current.focus(); // 4. current가 dom을 가리킨다. domapi인 focus를 호출.
    }

    return (
        <div>
            <input name="name" value={name} onChange={onChange} ref={nameInput}/> {/* 3. 선택하고 싶은 돔 선택 */}
            <input name="nickname" value={nickname} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;
```

