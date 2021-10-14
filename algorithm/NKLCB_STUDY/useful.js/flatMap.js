const arr = ["hello", "world"];
arr_map = arr.map(x => x.split('')).flat();
console.log(arr_map) // [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']