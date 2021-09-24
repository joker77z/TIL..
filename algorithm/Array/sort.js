const todos = [
  { id: 4, content: 'html' },
  { id: 1, content: 'css' },
  { id: 2, content: 'js' },
];

function compare(key) {
  // 문자열 비교까지 생각. 문자열의 경우 -를 하면 NaN이 나온다.
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);

  // 숫자만 생각한다면 아래처럼 해도 된다.
  // return (a, b) => a[key] - b[key];

  // 양수면 위치를 바꾸고 음수면 그대로 둔다. 그래서 1, 2, 4 순서가 된다.
}

todos.sort(compare('id'));
todos.sort(compare('content'));

// todos.sort((a, b) => a['id'] - b['id']); // 내가 짜본 것

console.log(todos);
