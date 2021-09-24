let object = ['apple', 'banana', 'banana'];

function removeAll(array, item) {
  return array.filter(v => v !== item);
}

object = removeAll(object, 'banana');
console.log(object);
