const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
/*
    # try1
    가장 큰 id값을 구한다.
    일단 값이 하나다.
    map으로 안되고 reduce가 적합해 보인다.
    reduce를 쓰면서 내부에서 가장 큰 값으로 교체를 해주는건 어떨까

    # try2
    reduce말고 바로 Math.max를 이용할 수 있는 방법은 없을까.
    todos를 받고 Math.max를 이용해서 0과 id들의 배열인 [1, 2, 3]을 비교하는 방법도 좋을 것 같다. 3개로 3개를 만드니 map을 쓰자.
    todos => Math.max(todos.map(todo => todo.id), 0)

    그런데 Math.max를 하려면 배열을 풀어서 요소로 넣어야 한다. 매핑한 것을 풀어주기 위해 spread 문법을 사용한다.
    todos => Math.max(...todos.map(todo => todo.id), 0)
*/
// const getMaxId = todos => Math.max(...todos.map(todo => todo.id), 0);
const getMaxId = todos => todos.reduce((maxId, cur) => Math.max(maxId, cur.id), 0);

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0
