if (!Array.prototype.filter2) {
  Array.prototype.filter2 = function (callback, thisArg) {
    // callback이 함수가 아니면 타입 에러
    if (typeof callback !== 'function') {
      throw new TypeError(`${callback} is not a function`);
    }

    // thisArg에 인수가 들어오지 않았을 때 전역객체로 설정
    thisArg = thisArg || global;

    const arr = [];
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this) === true ? arr.push(this[i]) : '';
    }
    return arr;
  };
}

const numbers = [1, 2, 3, 4];
console.log(numbers.filter2(v => v % 2 === 0));
