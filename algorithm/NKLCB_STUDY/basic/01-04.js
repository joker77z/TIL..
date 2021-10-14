
function solution(str) {
    const newStr = str.split('');
    const result = [];
    let cal = 0;

    newStr.forEach(el=> {
        if(el === '(') {
            cal += 1;
            return;
        } else if ( el === ')') {
            cal -= 1;
            return;
        } 
        if(cal === 0) {
            result.push(el);
        }
    })
    return result.join('');
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));