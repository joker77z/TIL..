# react

## 배열 렌더링하기

```js
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
```

목적 : 이 내용을 렌더링해야하는데 비효울적인 방법, 효율적인 방법을 알아본다.

### 비효율적인 코드
```js
import React from 'react';

function UserList() {
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
    // 배열안에 있는 원소들을 하나하나 렌더링하는 jsx코드를 작성해보겠다.
    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>          
    )
}
export default UserList;
```

### 효율적인 코드

컴포넌트를 하나 더 만들거다.
파일을 분리해도 되고 같은 파일에 해도 된다.(하나의 파일안에 또 만들어도 됌)

```js
import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}


function UserList() {
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
    // 배열안에 있는 원소들을 하나하나 렌더링하는 jsx코드를 작성해보겠다.
    return (
        <div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </div>          
    )
}
export default UserList;
```

만약에 3개로 끝났다면 이걸로 ok지만 더 늘어나거나 더 줄어든다면 이렇게 할 수 없다.
이럴 때 javascript의 내장 함수 map을 사용한다.

그래서 배열형태. 즉, 객체 배열형태로 있는 것을 컴포넌트 엘리먼트 배열형태로 변환한다.

```js
return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}
            {/* 방법은 되게 간단하다. */}
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>          
    )
```

🔺 key를 넣어준 이유는 콘솔창에 key prop을 설정해달라는 오류 때문이다. 이 예시에서는 index값을 미리 줬지만 없는 경우들이 있는데 이럴 때는 아래와 같이 할 수 있지만 성능 향상 이런건 없고 단순 오류만 제거하기 위함이다.

이런 방법을 지양해야 되는데 이유는 일단 키의 역할에 대해 먼저 알아봐야 한다.
```js
return (
        users.map(
            (user, index) => (<User user={user} key={index}/>)
        )       
    )
```

<br>

#### 키의 역할
```js
const array = ['a', 'b', 'c', 'd'];
```

```js
array.map(item => <div>{item}</div>);
```
**key가 없다면**

위와 같은 이런 예시가 있고 만약 b와 c사이에 z를 넣어야 하거나
a를 제거해야 하거나 이럴 때 불필요하게 많은 동작들이 일어난다.

예를 들어 b와 c사이에 z를 넣게 되면 

c가 z로 바뀌고

d가 c로 바뀌고

마지막에 d가 추가된다.

<br>

**하지만 key가 있다면**

정확히 어떤 객체를 가리키고 있는지 알아서 중간에 {id: 5, text: 'z'}를 삽입하거나
id: 0번 객체를 지우거나 할 때 굉장히 효율적이다.

**위에서 임시로 오류제거하기 위해 사용했던 index**

값이 10개, 20개밖에 안되거나 자주 변경되지 않는 데이터거나 한다면 그냥 index를 사용해도 문제가 발생하지 않는다. 그런데 배열안에 있는 값들이 자주 업데이트 되는데 index를 사용하면 매우 비효율적으로 업데이트 된다.