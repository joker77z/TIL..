const Todos = (() => {
  // const todos = [
  let todos = [
    { id: 3, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ];
  console.log(todos);

  return {
    add(newTodo) {
      // return [newTodo, ...todos];
      todos = [newTodo, ...todos];
      // 이 경우라면 push해도 상관없다. 근데 push도 하고 이런 억세서 방식도 쓰고 하면 좋지 않다.
      // 하나로 통일하기 위해 이런 억세서 방식을 쓰자.
    },
    render() {
      return todos
        .map(
          ({ id, content, completed }) => `
        <li id="${id}">
          <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
        </li>`
        )
        .join('');
    }
  };
})();

// Todos.add로만 써도 된다. 아깐 떨어져 있어서 그랬지만 이제는 붙어있으니 사족인거다.
Todos.add({ id: 4, content: 'test', completed: false });
console.log(Todos.render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
