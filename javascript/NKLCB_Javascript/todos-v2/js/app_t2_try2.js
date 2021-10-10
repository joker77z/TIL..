// State =======================================
let todos = [];
let currentFilter = 'all';

// DOM Nodes ===================================
const $newTodo = document.querySelector('.new-todo');
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// State Function ==============================
const render = () => {
  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
      ? !todo.completed
      : true
  );

  $todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) =>
        `<li data-id="${id}">
            <div class="view">
              <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
              <label>${content}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="${content}" />
          </li>`
    )
    .join('');
  [$main, $footer].forEach($el => $el.classList.toggle('hidden', todos.length === 0));

  const activeTodos = _todos.filter(todo => !todo.completed).length;
  $todoCount.textContent = `${activeTodos} ${activeTodos > 1 ? 'items' : 'item'} left`;
};

const setTodos = newTodo => {
  todos = newTodo;
  render();
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  render();
};

const fetchTodos = () => {
  setTodos([
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]);
};
const generateTodoId = () => Math.max(...todos.map(todo => todo.id)) + 1;
const addTodos = content => {
  setTodos([{ id: generateTodoId(), content, completed: false }, ...todos]);
};

const toggleAllTodosCompleted = completed => {
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

const toggleTodosCompleted = id => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));
};

const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

const removeAllCompleted = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

// Event Binding ==============================
window.addEventListener('DOMContentLoaded', fetchTodos);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  const content = e.target.value;

  if (content) addTodos(content);
  e.target.value = '';
};

$toggleAll.onchange = () => {
  toggleAllTodosCompleted($toggleAll.checked);
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;
  toggleTodosCompleted(e.target.closest('li').dataset.id);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;
  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;
  updateTodoContent(e.target.closest('li').dataset.id, e.target.value);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;
  removeTodo(e.target.closest('li').dataset.id);
};

$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;
  [...$filters.querySelectorAll('a')].forEach($a =>
    $a.classList.toggle('selected', e.target.id === $a.id)
  );
  setFilter(e.target.id);
};

$clearCompleted.onclick = removeAllCompleted;
