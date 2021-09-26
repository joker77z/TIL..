// find는 filter와 다르게 해당 요소자체만 반환한다.
// filter는 true인 모든 요소를 배열로 반환한다.

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

const findNo1 = users.find(user => user.id === 1);
console.log(findNo1)

// filter메서드와 비교
const filterNo2 = users.filter(user => user.id === 2);
console.log(filterNo2)