/*
  controller에서 이벤트가 발생했을 때 이벤트핸들러를 바인딩 해주는 중재자 역할을 한다.
  model에 있는 이벤트 핸들러들을 불러오도록 model.mjs를 import한다.
  setTodos나 setFilter는 결국 controller에서 실행되면서 model과 view를 컨트롤 한다.
*/

import {
  setFilter,
  fetchTodos,
  addTodos,
  toggleAllTodosCompleted,
  toggleTodosCompleted,
  updateTodoContent,
  removeTodo,
  removeAllCompleted
} from './model.mjs';

const $newTodo = document.querySelector('.new-todo');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

export default () => {
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
};
