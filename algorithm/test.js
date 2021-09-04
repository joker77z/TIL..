
let test = [1, 2, 3, 4];
let tmp = [];
// let tmp = [...test];
for(let i=0; i<test.length; i++) {
    tmp = test.slice();
    tmp[i] = 99;
}

console.log(tmp, test)