# INDEX
- [REACT](#react)
  * [조건부 렌더링](#-------)

<hr>

<br>

# REACT

## 조건부 렌더링
특정 조건이 참인지 거짓인지에 따라 다른 결과를 보여주는 것을 의미.

*App.js*

```js
import React from 'react';
import Wrapper from './Wrapper';

function App() {
    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial={true}/>
            <Hello color="blue"/>
        </Wrapper>
    )
}

export default App;
```

*Hello.js*

```js
import React from 'react';

function Hello({name, color, isSpecial}) {
    return (
        <div style={{color}}>{isSpecial ? <b>*</b> : null}안녕하세요{name} </div>
    )
}

```

> 참고로 {null}, {undefined}, {false}는 나타나지 않지만 {0}은 나타난다.

> Hello.js의 삼항연산자의 경우 이 예제에서는 사실 삼항연산자가 아니라 and 조건을 사용하는 것이 좋다. `{isSpecial && <b>*</b>}` 이렇게 해주면 isSpecial이 false일 때는 뒤에 것이 출력되지 않고 True일 때만 뒤에 것이 출력되기 때문이다. 여기서 단순히 숨기고 보여주는 경우니까 이렇게 하고 삼항연산자는 내용이 바뀔 경우 사용하기 더 적합하다.

> 삼항연산자를 적용하기 좋은 예 `{isSpecial? '스페셜하다' : '낫스페셜'}`

> isSpecial을 그냥 비우면 True로 설정된다. (Boolean속성을 사용할 때 기억해두자.)

> 여기서 사용한 isSpecial은 정해진 용어가 아니다. 그냥 special 이런 다른 단어 사용해도 된다.
