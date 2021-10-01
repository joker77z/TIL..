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
  ❌ splice를 쓰는 것은 미친짓.
  정신 똑바로 차리자.

  생각해보자.
  3개 개수가 들어가는데 2개가 나온다.
  map이 아니라 filter를 사용하자.
*/

const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);

todos = removeTodo(todos, 2);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/