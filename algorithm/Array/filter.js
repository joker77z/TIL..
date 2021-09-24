const fruits = ['apple', 'banana', 'apple'];
const appleFilter = fruits.filter(el => el === 'apple');
console.log(appleFilter); // ['apple', 'apple'];

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(el => el % 2);
console.log(odds);

// ------------------
// 예시
class Users {
  constructor() {
    this.users = [
      { id: 1, name: 'lee' },
      { id: 2, name: 'kim' },
    ];
  }

  // 아이디 찾기
  findId(id) {
    return this.users.filter(el => el.id === id);
  }

  // 아이디 제거
  removeId(id) {
    // true인거만 다시 this.users에 담으니까.
    // 제거하려고 하는 id와 다른 id들만 true가 되서 다시 this.users에 담긴다.
    this.users = this.users.filter(el => el.id !== id);
  }
}

const user1 = new Users();
console.log(user1.findId(1)); // [ {id:1, name: 'lee'} ]
user1.removeId(1);
console.log(user1); // Users { users: [{id:2, name: 'kim}]}
