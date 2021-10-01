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

const getValues = (todos, key) => {
    let resultData = "";
    if (key === 'id') {
        const idMap = todos.map(el => el.id);
        resultData = idMap;
    } else if (key === 'content') {
        const contentMap = todos.map(el => el.content);
        resultData = contentMap;
    } else if (key === 'completed') {
        const completedMap = todos.map(el => el.completed);
        resultData = completedMap;
    }
    return resultData;
};

console.log(getValues(todos, 'id')); // [3, 2, 1]
console.log(getValues(todos, 'content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues(todos, 'completed')); // [false, true, false]