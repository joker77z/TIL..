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
    이번 문제도 마찬가지로 몇개가 들어왔다가 나가는지부터 생각해보자.
    3개가 들어왔다 3개가 나간다.
    그리고 순수함수를 만든다고 또 생각해라.
*/

const toggleCompletedAll = todos => todos.map(todo => ({...todo, completed: true}));

todos = toggleCompletedAll(todos);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', /Users/bagtaejun/Documents/dev/TIL/javascript/NKLCB_Javascript/NKLCB_test2completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/