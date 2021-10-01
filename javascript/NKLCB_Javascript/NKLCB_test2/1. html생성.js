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

const render = todos => {
    let htmlString = "";
    todos.forEach(el => {
        const completed = el.completed ? 'checked' : '';
        const result = `<li id="${el.id}">
        <label><input type="checkbox" ${completed}>${el.content}</label>
      </li>`;
        htmlString += result;
    });
    return htmlString;
}
console.log(render(todos));