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

const toggleCompletedById = (todos, id) => {
    return todos.map(el => {
        if (el.id === id) {
            //FIXME: keep
            el.completed === true ? 'false' : 'true';
        }
        return el;
    })
};

todos = toggleCompletedById(todos, 2);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/