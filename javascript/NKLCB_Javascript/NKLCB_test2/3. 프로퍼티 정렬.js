let todos = [{
        id: 3,
        content: 'HTML',
        completed: false
    },
    {
        id: 2,
        content: 'CSS',
        completed: true
    },
    {
        id: 1,
        content: 'Javascript',
        completed: false
    },
];
/*
    ❌ 매개변수 이름 a, b로 하지말 것!! 의미있게 지어라!
    todo1 - todo2 결과가 0보다 작은 경우 todo1이 먼저 나온다. 따라서 id값이 오름차순으로 정렬된다.
    문자는 대소비교를 해야된다. 'a'와 'b'를 비교하면 아스키코드에서 97-98이어서 음수가 된다. 음수니까 'a'가 먼저나오는 식.
    음수일 때, 양수일 때를 비교하고 두 요소가 같을 때를 마지막에 0으로 처리해서 변경이 없도록 한다.
    const test = ['a', 'b', 'c'];
    console.log('a'.charCodeAt())
    console.log('b'.charCodeAt())
    test.sort((test1, test2) => test1> test2 ? 1 : -1);
    console.log(test)
*/

const sortBy = (todos, key) => todos.sort((todo1, todo2) => todo1[key]<todo2[key] ? -1 : todo1[key]>todo2[key] ? 1 : 0);

todos = sortBy(todos, 'id');
console.log(todos);
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy(todos, 'content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy(todos, 'completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/