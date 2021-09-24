class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  //   test() {
  //     return this; // Prefixer {prefix: '-webkit-'}
  //   }
  add(arr) {
    return arr.map(el => {
      return this.prefix + el;
    });
    // return arr.map(function (el) {
    //   return this.prefix + el;
    // }, this);
  }
}

const prefixer = new Prefixer('-webkit-');

console.log(prefixer.add(['transition', 'user-select']));
