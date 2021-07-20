# react

## use


## useRef로 컴포넌트 안의 변수 만들기

useRef로 컴포넌트 안에 변수를 만드는 방법을 알아본다.
여기서 말하는 변수는 어떤걸까?

예를들어 컴포넌트 내부에서 let키워드를 사용해서 선언하면
다음 리렌더링 될때 해당 변수값은 초기화 된다. 

만약에 값을 계속 유지하려면 `useState`를 사용해야 하는데 useState는 값을 바꾸게 되면 `컴포넌트가 리렌더링된다.` 하지만, 가끔씩 어떤 값을 바꿨을 때 `굳이 리렌더링 될 필요없는 값을 관리하게 될 때`가 있다. 그런 경우에 `useRef`를 사용한다.

**즉, 특정 DOM을 선택할 때나 컴포너트가 계속 리렌더링 될때마다 기억할 수 있는 값을 관리할 때도 사용할수가 있다는 것.**

주로 어떤값을 관리할 때 쓰냐면 setTimeout, setInterval을 쓸 때 주어지는 id값을 기억해야 할 때라던지 외부라이브러리를 사용해서 생성된 인스턴스를 담을 때, 스크롤을 알고 있어야 할때도 사용한다.

포인트는 useRef로 관리하는 값은 값이 바뀌어도 컴포넌트가 리렌더링 되지 않는다는 것.

### 시작

우리는 App 컴포넌트에서 useRef를 사용해서 변수를 관리해볼 것인데 용도는 배열에 새로운 항목을 추가할 때 새 항목에서 사용할 고유 id값을 관리하기 위해 사용하는 것이다.

이 작업을 하기 전에 먼저 해야할 작업이 있다.

*app.js*
```js
import React, {useRef} from 'react'; // useRef 불러온다.
import UserList from './UserList';

function App() {
  // UserList.js에서 여기로 유저데이터를 옮기고 props로 전달한다.
  const users = [
    {
        id: 1,
        username: 'taejoon',
        email: 'know12392@gmail.com'
    },
    {
        id: 2,
        username: 'test',
        email: 'tester@example.com'
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
    }
];
// 3개의 항목이 있으니까 초기값은 4로 할 것.
// useRef로 만들어준 이유는 값이 바뀐다고 컴포넌트가 리렌더링 될 필요가 없기 때문
// useState로 해도되나 굳이 쓸 필요가 없어서 useRef로 해도 괜찮다.
const nextId = useRef(4);

const onCreate = () => {
  console.log(nextId.current); //4
  nextId.current += 1 // 다음은 5가 되게.
}
  return (
    <UserList users={users}/>
  )
}

export default App;
```

*UserList.js*

```js
import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

// 이 고유 id값을 관리하기 위해 사용할 것이다. 먼저 할 것이 있다.
// users 배열을 props로 받아올 것이다. 기존에 있던 users 배열을 app.js로 옮긴다.
function UserList({users}) {
    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>          
    )
}
export default UserList;
```
*해설*

app.js에서 다음 유저를 추가할 때 `onCreate`함수로 추가한다고 가정하고 다음 id값은 4가 될 것이기 때문에 useRef(4)를 기본값으로 하면서 nextId객체에 할당한다.

다음, onCreate가 실행될 때마다 nextId.current가 1씩 증가하도록 한다.

이 과정이 있을 때 컴포넌트는 다시 리렌더링 되지 않도록 하기 위함이다.


> 내용이 길고 복잡해보이지만 포인트는 useRef를 이용해서 DOM을 컨트롤할 때도 쓰지만 값이 변해도 컴포넌트가 렌더링되지 않게 하는 목적으로도 사용한다는 것.