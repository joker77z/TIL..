# INDEX
- [REACT](#react)
  * [props](#props)
    + [가장 기본적인 형태의 properties](#------------properties)
    + [인라인 스타일로 props 전달](#---------props---)
    + [구조 분해 할당으로 props 전달](#-----------props---)
    + [기본값 할당](#------)
    + [Wrapper 감싸는 Props를 이용한 작성 방법](#wrapper-----props-----------)
    + [인라인 스타일로 props 전달](#---------props----1)
    + [구조 분해 할당으로 props 전달](#-----------props----1)
    + [기본값 할당](#-------1)
    + [Wrapper 감싸는 Props를 이용한 작성 방법](#wrapper-----props------------1)

<hr>

<br>

# REACT

## props
props란 `<Hello />` 이 상태로 그치는 것이 아니라 어떤 값을 전달하기 위한 속성이다.
`<Hello name="react">` 여기서 name="react"가 props다.

이 props를 이런 형태로 전달하기도 하고 파라미터로 전달하기도 한다.


### 가장 기본적인 형태의 properties

*App.js*
```js
import Hello from './Hello'

function App() {
  return (
    <>
      <Hello name="react"/>
    </>
  )
}
```

*Hello.js*

```js
function Hello(props) {
  return (
    <div>{props.name}</div> {/* react */}
  )
}

import default Hello;
````

<br>

### 인라인 스타일로 props 전달

*App.js*

```js
import Hello from './Hello'

function App() {
  return (
    <>
      <Hello name="react" color="red"/>
    </>
  )
}
```

*Hello.js*
```js
function Hello(props) {
  return (
    <div style={{color: props.color}}>{props.name}</div> 
    {/* style={} 안에 객체형식으로 {color: props.color} */} 
  )
}

import default Hello;
````

<br>

### 구조 분해 할당으로 props 전달

*App.js*

```js
import Hello from './Hello'

function App() {
  return (
    <>
      <Hello name="react" color="red"/>
    </>
  )
}
```

*Hello.js*
```js
function Hello({name, color}}) {
  return (
    <div style={{color}}>{name}</div> 
  )
}

import default Hello;
````

객체 분해 할당을 이용해서 파라미터 값으로 객체 형식으로 받아오고 사용할 때

인라인 스타일 안에서 `<div style={{color: color}}>`를

`<div style={{color}}></div>`하나의 color로 줄여지고

content는 `{name}`으로 쓰면 된다.

<br>

### 기본값 할당
만약에 name이란 속성값을 App.js에서 Hello.js로 주지 않았다고 했을 때

*App.js*

```js
import Hello from './Hello'

function App() {
  return (
    <>
      <Hello name="react" color="red"/>
      <Hello color="red"/> {/* name이란 속성을 주지 않았다 */}
    </>
  )
}
```

*Hello.js*
```js
function Hello({name, color}}) {
  return (
    <div style={{color}}>{name}</div> 
  )
}

{/* 객체 형태로 기본 속성값을 지정할 수 있다. */}
Hello.defaultProps = {
  name: '이름없음'
}
import default Hello;
````

<br>

### Wrapper 감싸는 Props를 이용한 작성 방법

반드시 children이란 단어를 사용해야 한다.


*App.js*

```js
import Hello from './Hello'
import Wrapper from './Wrapper'

function App() {
  return (
    <Wrapper> {/* 이 부분에 Wra 이정도만 쳐도 자동완성으로 나오고 import된다. */}
      <Hello name="react" color="red"/>
      <Hello color="red"/>
    </Wrapper>
  )
}
```

*Wrapper.js*
```js
function Wrapper({childern}) {
  const style = {
    border: '2px solid black',
    padding: 16
  }
  return (
    <div style={style}>{childern}</div> 
  )
}

import default Wrapper;
````
