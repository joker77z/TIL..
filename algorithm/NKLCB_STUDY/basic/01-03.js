function isPrime(num) {
    if(num === 1) return false;
    if(num === 2) return true;

    for(let i = 2; i<num; i++) {
        if(num %i === 0) {
            return false;
        }
    }
    return true;
}

function solution(arr) {
    let newArr = [];
    arr.forEach( el => {
        el = Number(el.toString().split('').reverse().join(''));
        if(isPrime(el)) {
            newArr.push(el);
        }
    })
    return newArr;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
