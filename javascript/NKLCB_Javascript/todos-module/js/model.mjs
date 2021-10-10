/*
  controller에서 이벤트 핸들러를 사용할 수 있도록 export한다.
*/
import { todos, setTodos, setFilter } from './view.mjs';

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

export {
  setTodos,
  setFilter,
  fetchTodos,
  addTodos,
  toggleAllTodosCompleted,
  toggleTodosCompleted,
  updateTodoContent,
  removeTodo,
  removeAllCompleted
};
