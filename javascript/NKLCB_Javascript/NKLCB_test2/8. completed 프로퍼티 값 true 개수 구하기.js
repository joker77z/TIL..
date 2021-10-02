const todos = [{
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
    하나의 값으로 나간다. 하나의 값은 reduce를 쓰는 게 좋았던 것 같다.
    그런데 filter를 사용해서 true인 개수를 세서 length를 하는 것은 어떨까?
    filter를 하면 true인 것을 배열로 반환할테니까 그 개수를 세면 될 것 같다.
    맞았다.!
*/

const countCompletedTodos = todos => todos.filter(todo => todo.completed).length;

console.log(countCompletedTodos(todos)); // 1