// 객체에서 찾는 것의 인덱스 반환하기

const users = [
    {id: 1, name: 'lee'},
    {id: 2, name: 'taejoon'}
]

tjIndex = users.findIndex(user => user.name === 'taejoon')
console.log(tjIndex) // 1
