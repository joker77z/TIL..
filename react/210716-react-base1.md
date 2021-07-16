# INDEX
- [REACT](#react)
  * [JSX 규칙](#jsx---)
    + [태그 사용 방법](#--------)
    + [임베디드 형식으로 스타일을 지정할 때ㅇ](#---------------------)
    + [class를 넣을 때](#class------)
    + [주석 쓰는 방법](#--------)

<hr>

<br>

# REACT

## JSX 규칙

### 태그 사용 방법

1. 태그는 꼭 닫혀있어야 한다.

    `<div>내용</div>`

    `<Hello />` 안에 별도의 내용이 없는 경우에는 이렇게 `셀프클로징`해줘야 한다.

2. return 안에 두 줄 이상 작성할 경우에는 `<>`(fragment)로 감싸주자. 개발자 창에서 보이지도 않고 감싸기에 좋다.

3. 자바스크립트 값을 보여줄 때는 중괄호를 사용한다.

    ```js
    function App() {
    const name = 'react';
    return (
        <>
        <Hello />
        <div>{name}</div>
        </>
    );
    }
    ```

<br>

### 임베디드 형식으로 스타일을 지정할 때ㅇ
인라인 스타일을 넣을 때 `style={스타일이름}`을 지정해주고 스타일은 객체로 만드는데 카멜케이스식으로 작성해야 한다.
```js
function App() {
  const style = { // 객체 카멜케이스로 생성해줘야 한다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // px안넣어도 된다.
    padding: '1rem' // 단위를 넣으려면 ''로 감싸야 한다.
  }
  return (
    <>
      <Hello />
      <div style={style}></div>
    </>
  );
}
```

<br>

### class를 넣을 때
JSX문법에서는 class가 아니라 className을 넣어줘야 한다.
class를 써도 구성은 되나 console창에 오류가 난다. 그렇다고 해서 이렇게 쓰지는 말고
className으로 쓰자.

```js
import './App.css'

function App() {
  return (
    <>
      <Hello />
      <div className="gray-box"></div>
    </>
  );
}
```

*./App.css*
```css
.gray-box {
  background: gray;
  width: 64px;
  height: 64px;
}
```

### 주석 쓰는 방법
`/* 어쩌고 저쩌고 */` 여기서 양쪽에 중괄호로 감싸줘야 한다.
`{/* 어쩌고 저쩌고 */}`
```js
import './App.css'

function App() {
  return (
    <>
      <Hello /> {/* 주석쓰는 방법 */}
      <div className="gray-box"></div>
    </>
  );
}
```

태그 안에서는 또 다르게 작성한다.
```js
import './App.css'

function App() {
  return (
    <>
      <Hello 
      // 여기 안에다가 작성합니다.
      /> 
      <div className="gray-box"></div>
    </>
  );
}
```

