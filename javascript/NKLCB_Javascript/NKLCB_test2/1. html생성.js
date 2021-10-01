const todos = [{
        id: 3,
        content: 'HTML',
        completed: false
    },
    {
        id: 2,
        content: 'CSS',
        completed: true
    },
    {
        id: 1,
        content: 'Javascript',
        completed: false
    }
];
/* 명심하자
    1. 변수이름, 매개변수 이름 매우 중요
    2. 인텐트
    3. 의미별로 줄행 바꿔주는거
    4. 디스트럭처릭 할당 {id, content, completed}
    5. forEach 쓰면 외부에 변수를 만들어야 하고 뮤테이트를 해야 한다.
    6. map, reduce로 할 수 있다. 두 개 다 시도해보자. (map이 가독성이 좀 더 좋았다.)
    # DOM에 들어갈 때는 신경쓰지 말고 자바스크립트 코드 가독성이 중요하다.
*/

const render = todos => todos.map(({id, content, completed}) => 
    `<li id="${id}">
        <label><input type="checkbox" ${completed === true ? 'checked' : 0}>${content}</label>
    </li>`).join('');

console.log(render(todos));
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