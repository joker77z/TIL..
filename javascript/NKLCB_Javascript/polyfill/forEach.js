// forEach 메소드를 가지고 있다면
if(!Array.prototype.forEach2) {
    Array.prototype.forEach2 = function(callback, thisArg) {

        // callback이 함수가 아니라면 에러를 전달한다.
        if(typeof callback !== 'function') {
            throw new TypeError(`${callback} is not a function`);
        }

        // thisArg가 undefined라면 window를 가리키게 한다.
        thisArg = thisArg || global;

        for(var i = 0; i<this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    }
}

const fruits = ['apple', 'banana'];
fruits.forEach2((v, i) => console.log(v));
// apple
// banana
