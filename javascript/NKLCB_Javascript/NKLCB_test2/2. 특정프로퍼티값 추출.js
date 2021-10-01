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
    2번 풀면서 깨달은 점 : 중괄호를 미리 넣지말고 한줄로 먼저 만들어보자.
*/

const getValues = (todos, key) => todos.map(todo => todo[key]);

console.log(getValues(todos, 'id')); // [3, 2, 1]
console.log(getValues(todos, 'content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues(todos, 'completed')); // [false, true, false]