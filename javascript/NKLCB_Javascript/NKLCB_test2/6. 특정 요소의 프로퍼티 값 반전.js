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
    }
];

/*
    3개가 들어가서 3개가 나온다.
    그럼 map을 사용하자.

    ❌ 자꾸 복사를 안하고 원본을 복사하려고 한다.
    일단은 접근할 때 원본을 무조건 수정하지 않는다고 계속 생각하자.
*/

const toggleCompletedById = (todos, id) => 
    todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo));

todos = toggleCompletedById(todos, 2);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/