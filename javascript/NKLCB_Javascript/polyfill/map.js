// Map 메소드가 없다면
if(!Array.prototype.map2) {
    Array.prototype.map2 = function(callback, thisArg) {

        // callback이 함수가 아니라면 에러를 전달한다.
        if(typeof callback !== 'function') {
            throw new TypeError (`${callback} is not a function`);
        }

        // thisArg가 undefined라면 window를 가리키게 한다.
        thisArg = thisArg || global;

        const arr = [];
        for(var i=0; i<this.length; i++) {
            arr.push(callback.call(thisArg, this[i], i, this));
        }
        return arr;
    }
}

const fruits = ['apple', 'banana'];
console.log(fruits.map2(v => v+'2')); // [ 'apple2', 'banana2' ]
