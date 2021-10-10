// state
let todos = [];

// DOM Nodes ====================================================
const $todoList = document.querySelector('.todo-list');

// state Function ===============================================
const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) => `
    <li data-id="${id}">
        <div class="view">
        <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
        <label>${content}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="${content}" />
     </li>`
    )
    .join('');
};

const fetchTodos = () => {
  todos = [
    { id: 1, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ];
  render();
};

// Event Bindings ===============================================
window.addEventListener('DOMContentLoaded', fetchTodos());
