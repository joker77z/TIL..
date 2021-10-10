/*
    1. 서버 있다 가정하고 가져온다. get보다 fetch가 기본 컨벤션
    2. todos를 유저의 액션에 의해 호출되야 한다. 어떤 액션에 의해서일까?
    FLUX에서 모든 프로세스의 시작은 action에서 시작된다.
    3. fetchTodos를 받았을 때 todos를 렌더링을 해줘야 한다. 그래서 렌더링을 만든다.
    4. 데이터를 받아왔을 때 렌더 가능하게.
    5. 전체토글 버튼 // hidden을 붙여준다. 리스트가 없을 때 나오지 않도록. 그것도 렌더링의 일부다. 렌더함수에서 한다.
    이 렌더함수의 범위가 지금 인풋~ 하단까지 이 네모 부분인거다. 나중에 쪼갤수가 있다. 재사용성을 위해. 우리는 쪼갤 필요가 없는 것 같다.
    6. 아무것도 없을 때 푸터도 없어야 한다. 푸터도 지워주자.
    7. 5번과 6번을 개선해준다.
    8. 7번을개선해준다.
    9. 이제 input해줄꺼다. 맨위에 있으니까 맨위에 해주고
    9-1 keyup
    9-2 addTo
    10. 매번 render해주기 싫다.
    10.1 위치 개선
    10.2 기존에있던 render써있던거 변경해ㅜㅈ기
    11. id만들어주는거.
    12. 브라우저 요소탭에서 보니까 하나 추가하니까 전부다 li들이 깜빡거린다. 전부다 새로 바뀐다. 변경이 있는 부분만 고쳐야 한다.
        리액트는 이걸 해결하기 위해서 가상돔을 만든다. 이걸 해결하기는 너무어려워서 이런 문제가 있다는거만 알아둬라.
    
    13. 항목별 토글(체크)
        위임을 해야 된다. todolist에게.
    13.1 toggleTodoCompleted 만들기

    14. 전체 반전시켜주기.
    14-1.함수만들기

    15. 더블클릭 편집모드
    16. todos내용 변경
    16-1. 함수만들기 updateTodoContent

    17. 지우기
    17-1. removeTodo

    ----------footer------------
    18. 개수세기(active한거만)

    19. All, Active, Completed 구현
    빨간 박스 옮겨가는거 하나해야되고, 화면 컨트롤 해야한다 두가지 일을해야한다. 하나씩해보자.
    19. 박스옮겨지는거부터
    19-1. 복사본 만들어서 렌더링할때만 쓴다.
    19-2. setTodos랑 같이 값 바뀌어주고 render해줄 함수
    FIXME: 여기 하다가 놓쳤다.


    20. clear completed
    21. 함수 구현
*/

// state
let todos = [];

// 19-1.
// 🌟 렌더함수에 영향을 줄 애들이 여기 위치. 다시 리렌더링할 요소.
// all, active, complted 얘네도 !
const currentFilter = 'all'; // active로 바뀌면 리렌더링해야되니까 여기위치해야 한다
// 여기 엄청많아지면 객체로 묶어주는게 좋을 수 있다.
// 불편한점은 꼭 store. 을 앞에 써줘야된다. 그래서 2개까지는 참는다!
/*
  const store = {
    todos: [],
    currentFilter: 'all',
  }
*/

// FIXME: 놓침
// const _todos = todos.filter(todo => {
//   // true면 고대로 카피
//   currentFilter === 'completed'
//     ? todo.completed
//     : currentFilter === 'active'
//     ? !todo.completed
//     : true;
// });

// DOM Nodes
// # 9
const $newTodo = document.querySelector('.new-todo');
const $todoList = document.querySelector('.todo-list');
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// * STATE FUNCTION

// #10 ESLint에 의한 오류. 이상은 없지만 지켜주자.
// const setTodos = newTodo => {
//   todos = newTodos;
//   render(); // render가 만들어질 때 얘를 안보기 때문에 있던지 없던지 신경안쓴다. 이벤트 실행될 때는 전역을 훑기 때문에 동작은 한다. 근데 ESLint말을 들을꺼다.
// };

// #3
// FIXME: 19-2 놓친부분 여기서 바꿔줘야함
const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) =>
        `<li data-id=${id}>
              <div class="view">
                  <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
                  <label>${content}</label>
                  <button class="destroy"></button>
              </div>
              <input class="edit" value="${content}" />
          </li>`
    )
    .join('');

  // #5
  // POINT: 기존에 있으면 일을 안한다. add! remove도 마찬가지 없으면 그냥 가만히 있는다.
  //   todos.length === 0 ? $main.classList.add('hidden') : $main.classList.remove('hidden');

  // #6
  // POINT: 이 두개가 비슷한 일을하니까 하나로 뭉치고 싶다. add, remove를 두번 써주는 것도 별로다.
  //   todos.length === 0 ? $footer.classList.add('hidden') : $footer.classList.remove('hidden');

  // #7 하고보니 이것도 불만족 스럽다.
  // $main.classList.toggle('hidden', todos.length === 0); // true이면 hidden을 붙이고 false이면 띄어라.
  // $footer.classList.toggle('hidden', todos.length === 0);

  // #8 배열에 넣어서 개선해주자. 성능은 손해지만 속도의 차이는 크지 않다. for문 2번정도니까.
  [$main, $footer].forEach($el => $el.classList.toggle('hidden', todos.length === 0));

  // # 18
  const activeTodos = todos.filter(todo => !todo.completed);
  $todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  // #20
  const completedTodos = todos.filter(todo => todo.completed);
  $clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};

// # 10.1 위치 개선
const setTodos = newTodo => {
  todos = newTodo;
  render(); // render가 만들어질 때 얘를 안보기 때문에 있던지 없던지 신경안쓴다. 이벤트 실행될 때는 전역을 훑기 때문에 동작은 한다. 근데 ESLint말을 들을꺼다.
};

// 19-2
const setFilter = newFilter => {
  currentFilter = newFilter; // 얘가 바뀌면 리렌더링!
  render();
};

// #1
// POINT: 얘가 MVC의 M에 속할 에일 것이다.
const fetchTodos = () => {
  // 원래 서버에서 비동기통신으로 가져올꺼여야 한다.
  // 얘가 바뀌면 다 바껴야 하는 전역 데이터다. 그래서 밖으로 빼준다.
  todos = [
    { id: 3, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ];
  // #4
  render();
};

// # 11
const generateTodoId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

// 9-2 addTodo
const addTodo = content => {
  // 10.2 setTodos로 바꿔주기
  setTodos({ id: generateTodoId(), content, completed: false }, ...todos);
};

// 13-1 toggleTodoCompleted
const toggleTodoCompleted = id => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));
};

// 14-1 toggleAllTodosCompleted
const toggleAllTodosCompleted = completed => {
  setTodos(todos.map(todo => [...todo, completed]));
};

// 16-1 updateTodoContent
const updateTodoContent = (id, content) => {
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

// 17-1 removeTodo
const removeTodo = id => {
  setTodos(todos.filter(todo => todo.id !== +id));
};

// 21
const removeAllCompltedTodos = () => {
  setTodos(todos.filter(todo => !todo.completed));
};

// * EVENT BINDING ------------------------------------------------------------------------------------------------

// #2
// fetchTodos 를 이벤트핸들러에 다는 습관을 갖자.
// 대소문자 섞여있는애들 on은 못붙이는 케이스가 대부분.
// POINT: 얘는 뷰와 관련이 있다. 위와 다르다.
window.addEventListener('DOMContentLoaded', fetchTodos);

// 9-1 newTodo.onkeyup
// keyup은 한글 문제가 있다. 근데 keypress써주면 되는데 mdn에 쓰지말라한다.
$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;
  // 화살표함수 쓰면 이벤트핸들러에서 this안쓰겠다는 의지다. 그냥 $newTodo하면 되니까. 이게 더 가독성이 좋다. this는 안쓸수있으면 안쓰는게 좋다.

  const content = $newTodo.value.trim(); // POINT: addTodo 제외는 다 빼논거다. DOM관련된거는 빼논거. 나중에 M으로 뺼 때 애매해진다. 지저분하게 DOM다루고 포커스다루고 하는건 이벤트 핸들러 내부에 쓰고 있는거다.

  if (content) addTodo(content);

  $newTodo.value = '';
  $newTodo.focus();
};

// # 13
$todoList.onchange = e => {
  // change이벤트가 하위에 있는 edit의 input태그도 발생할여지가 있어서 걸러줘야 한다.
  // 위임을 하면 e.target이 얼마나 중요한지 알아야 한다.
  // POINT: class없으면 matches쓰면 되고 class면 classList쓰면 된다.
  if (!e.target.classList.contains('toggle')) return;

  // id를 가지고오는 행위를 해봐야한다. id를 써야하니까.
  // const { id } = e.target.parentNode.parentNode.dataSet;
  // POINT: 너무못생겨서 클로젯을 써본다. 타겟의 입장에서 data-id가 있는 list찾기! matches랑 똑같다. css셀렉터 문법 주면 된다. 가장가까이 있는 li찾아라.
  // 다른게 중간에 껴들어도 쉽게 찾아갈 수 있게 한다.
  // POINT: 누가 물어봤을 떄 대답한다고 생각하고 찾자.
  //   const { id } = e.target.closet('li').dataset;

  toggleTodoCompleted(e.target.closet('li').dataset.id);
};

// #14
// 자신이 이벤트타겟이자 커렌트 타겟이라 안거른다.
// 반전시켜주면 된다.
$toggleAll.onchange = () => {
  // e도 필요없어서 빼줬다.
  // e.target도 필요없이 toggleAll써주면된다.
  const completed = $toggleAll.checked; // FIXME: 얘를 어떻게 바꿔주셨는데?

  toggleAllTodosCompleted(completed);
};

// #15
// 여러개있으니까 위임해줘야할것 같다.
$todoList.ondblclick = e => {
  // e.target이 label이라 classList를 못쓰니까 matches써야된다는 얘기다. css문법줘서. 이 문법으로 가지고올수있는거냐 보는거다.
  // view에 label이 아니면 return쳐라
  if (!e.target.matches('.view > label')) return;
  e.target.closet('li').classList.add('editing'); // POINT: 지워주는건 안해도 된다. 엔터하면 다시 render되니까.
};

// #16
$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;
  // console.log(e.target.parentNode.dataset.id);
  // console.log(e.target.value);
  updateTodoContent(e.target.parentNode.dataset.id, e.target.value);
};

// # 17지우는 버튼
// 브라우저에서 li에 :hover걸어주고 요소선택으로 선택해서 잡아주면 정확히 어디인지 알 수 있다.
$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;
  removeTodo(e.target.closet('li').dataset.id);
};

// # 19
// e.target에 selected추가하고 아닌애들 selected뺀다. 이렇게 구현한다.
$filters.onclick = e => {
  if (!e.target.classList.matches('.filters > li > a')) return; // 일때에만 동작하게
  // 꼭 document아니여도 된다. document면 전체에서 찾는거고 요소를 넣어줘서 속도 조금 더 빨리 할 수 있는데 doucment써도 상관없지만 이렇게 해도 상관없다. 이렇게해주자.
  [...$filters.querySelectorAll('a')].forEach($a => {
    // NodeList라서 라이브할 때도 있기 때문에 가장 좋은 방법은 그냥 다 배열로 바꿔서 사용하는 것을 추천.
    $a.classList.toggle('selected', $a === e.target); // a타겟이면 selected붙이고 아니면 띈다. 이런얘기다!
  });

  setFilter(e.target.id); // ul이 깜빡거린다. 리렌더링 된다.
};

// 20
$clearCompleted.onclick = removeAllCompltedTodos; // e도 줄필요없고 뭐할거없으니까 이렇게 하면 된다.
