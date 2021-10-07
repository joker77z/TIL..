let todos = [
  { id: 3, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'HTML', completed: false }
];
console.log(todos);

const add = newTodo => {
  // return [newTodo, ...todos];
  todos = [newTodo, ...todos];
  // 이 경우라면 push해도 상관없다. 근데 push도 하고 이런 억세서 방식도 쓰고 하면 좋지 않다.
  // 하나로 통일하기 위해 이런 억세서 방식을 쓰자.
};

const render = () => {
  todos
    .map(
      ({ id, content, completed }) => `
        <li id="${id}">
          <label><input type="checkbox" ${completed ? 'checked' : ''}>${content}</label>
        </li>`
    )
    .join('');
};

// export default { add, render }; // 객체에 담아서 전달해야 되는데 이렇게가 안될꺼다. 오류가 날꺼다. 이 객체의 이름이 없어서 그렇다. 그래서

const Todos = { add, render };
export default Todos;

// 이렇게 하면 todos는 내보내는게 아니다. 이렇게 하면 Todos.js 하면 된다.
// Todos와 관련된 로직이 들어올 확률이 적다.(안되는거다.)
// 이렇게하면 가운데에 다른 코드가 들어올 불안도 해소되고
// 클로저가 된다. 모듈은 모듈 스코프를 만든다. 모듈의 실행컨텍스트 렉시컬환경을 만드는데 export된애들이 다 클로저가 된다.
