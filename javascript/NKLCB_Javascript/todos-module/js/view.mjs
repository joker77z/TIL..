/*
  view에는 주로 UI에 보이는 렌더링 과정을 넣는다.
  일부 activeTodos개수같은 컨트롤같은 요소가 존재하지만 사용자가 다른 것을 컨트롤했을 때 부수적으로 변경되는 렌더링 부분이기 때문에 view에 넣는다.
*/

const $todoList = document.querySelector('.todo-list');
const $todoCount = document.querySelector('.todo-count');
const $main = document.querySelector('.main');
const $footer = document.querySelector('.footer');

let todos = [];
let currentFilter = 'all';

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
export { todos, setTodos, setFilter };
