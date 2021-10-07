// statement
let todos = [];

const $todoList = document.querySelector('.todo-list');
const $newTodo = document.querySelector('.new-todo');
const $toggleAllbtn = document.querySelector('[for="toggle-all"]');
const $toggleAllCheck = document.getElementById('toggle-all');
const $toggle = document.querySelector('.toggle');
const $todoCount = document.querySelector('.todo-count');
const $all = document.getElementById('all');
const $active = document.getElementById('active');
const $completed = document.getElementById('completed');
const $clearCompleted = document.querySelector('.clear-completed');
const $label = document.querySelector('.todo-list');
const $edit = document.querySelector('.edit');

const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, complete }) =>
        `<li data-id=${id}>
            <div class="view">
                <input type="checkbox" class="toggle" ${complete ? 'checked' : ''}/>
                <label>${content}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${content}" />
        </li>`
    )
    .join('');
  $todoCount.textContent = `${todos.length} item left`;
};

const fetch = () => {
  todos = [
    { id: 3, content: 'Javascript', complete: false },
    { id: 2, content: 'CSS', complete: true },
    { id: 1, content: 'HTML', complete: false }
  ];
  render();
};

const setTodos = newTodos => {
  todos = newTodos;
  render();
};

// DOM로드 됬을 때
window.addEventListener('DOMContentLoaded', fetch());

// 추가
const nextId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;
const addTodo = content => {
  setTodos([{ id: nextId(), content, complete: false }, ...todos]);
};

// 삭제
const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

// 토글
const toggleComplete = id => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, complete: !todo.complete } : todo)));
};

// 추가
$newTodo.onkeyup = e => {
  if (e.key === 'Enter') {
    // 엔터하면 기존에 있는 todos에 항목을 추가
    const content = e.target.value.trim();
    if (content) addTodo(content);
  }
};

// 삭제 클릭
$todoList.onclick = e => {
  // 다른데 클릭하면 안되게
  if (!e.target.classList.contains('destroy')) return;
  removeTodo(e.target.parentNode.parentNode.dataset.id);
};

// 토글 클릭
$todoList.onchange = e => {
  toggleComplete(e.target.parentNode.parentNode.dataset.id);
};

// 전체 토글 클릭
$toggleAllbtn.onclick = () => {
  // console.log($todoList);
  // checked가 없으면 checked를 추가하고 todos의 complete를 모두 true로 만든다.
  // if ($toggleAllCheck.hasAttribute('checked')) {
  if ($toggleAllCheck.checked) {
    setTodos(todos.map(todo => ({ ...todo, complete: false })));
    $toggleAllCheck.removeAttribute('checked');
  } else {
    setTodos(todos.map(todo => ({ ...todo, complete: true })));
    $toggleAllCheck.setAttribute('checked', '');
  }
};

// 더블 클릭
$label.ondblclick = e => {
  e.target.parentNode.parentNode.classList.add('editing');

  // console.log(e.target.parentNode.innerText);
  // e.target.parentNode.innerText = e.target.parentNode.nextElementSibling.value;
  // const { id } = e.target.parentNode.parentNode.dataset;

  // e.target.parentNode.parentNode.classList.contains('editing');
  // setTodos(
  //   todos.map(todo =>
  //     todo.id === +id ? { ...todo, content: e.target.parentNode.nextElementSibling.value } : todo
  //   )
  // );
};

// FIXME: ALL, Active, Completed todos가 변경됌
// All 클릭
$all.onclick = () => {
  console.log(todos);
  setTodos(todos);
};

// Active 클릭
$active.onclick = () => {
  setTodos(todos.filter(todo => todo.complete === false));
};

// Completed 클릭
$completed.onclick = () => {
  setTodos(todos.filter(todo => todo.complete === true));
};

// Clear completed 클릭
$clearCompleted.onclick = () => {
  setTodos(todos.filter(todo => todo.complete === false));
};
