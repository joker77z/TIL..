const test = 'abccdd';

const sH = new Map();

for (x of test) {
    sH.set(x, sH.get(x)+1 || 1);
}
console.log(sH) // Map(4) { 'a' => 1, 'b' => 1, 'c' => 2, 'd' => 2 }

let sH_2 = [...sH] // [ [ 'a', 1 ], [ 'b', 1 ], [ 'c', 2 ], [ 'd', 2 ] ]
console.log(sH_2[1]) // [ 'b', 1 ]

const [a, b, c, d] = sH_2
console.log(a) // [ 'a', 1 ]

for (x of sH.keys()) {
    console.log(x)
} // a b c d

for (x of sH.values()) {
    console.log(x)
} // 1 1 2 2

for(x of sH.entries()) {
    console.log(x)
}
/*
[ 'a', 1 ]
[ 'b', 1 ]
[ 'c', 2 ]
[ 'd', 2 ]
*/