// find는 요소를 반환했다면
// findIndex는 요소의 인덱스를 반환한다. 이 때 없는 요소라면 -1을 반환한다.

const users = [{
        id: 1,
        name: 'Lee'
    },
    {
        id: 2,
        name: 'Park'
    },
    {
        id: 2,
        name: 'Kim'
    },
]

const usersNo1Index = users.findIndex(user => user.id === 1)
console.log(usersNo1Index)