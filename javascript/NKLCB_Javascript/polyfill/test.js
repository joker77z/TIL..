if (Array.prototype.map2) {
  Array.prototype.map2 = function (callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not function');
    }

    thisArg = thisArg || global;

    const arr = [];
    for (let i = 0; i < this.length; i++) {
      arr[i] = callback.call(thisArg, this[i], i, this);
    }
    return arr;
  };
}

const test = [1, 2, 3];
const testMap = test.map(el => el * el);
console.log(testMap);

// filter
if (!Array.prototype.filter2) {
  Array.prototype.filter2 = function (callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not function');
    }

    thisArg = thisArg || global;
    let arr2 = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        arr2 = [...arr2, this[i]];
        console.log(arr2);
      }
    }
    return arr2;
  };
}

const test4 = [1, 2, 3, 4];
const result = test4.filter2(el => el % 2 === 0);
console.log(result);
