/*
  한번에 내보내서 필요한거만 그때그때 사용할 수 있는 방법 있지 않을까
  -> 오히려 컨트롤하기가 더 힘들고 무엇을 불러와야할지 이 파일을 다시 열어야 하는 문제점이 있을 것 같다.
*/
const $newTodo = document.querySelector('.new-todo');
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

const DOMNodes = {
  $newTodo,
  $main,
  $toggleAll,
  $todoList,
  $footer,
  $todoCount,
  $filters,
  $clearCompleted
};

export default DOMNodes;
