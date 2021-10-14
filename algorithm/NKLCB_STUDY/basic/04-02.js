/*
상태변화

base: 11000111 -> goal: 11100110
조건1 : 0과 1을 바꾸거나
조건2 : base에서 두 값을 바꿔서 goal에 맞춘다.

*/


function solution(data) {
    const [base, goal]= data.split(' ');
    let toZero = 0;
    let toOne = 0;

    for(let i=0; i<base.length; i++) {
        if(base[i] !== goal[i]) {
            if(base[i] === '0') {
                toOne ++;
            } else {
                toZero ++;
            }
        } else {
            continue;
        }
    }
    return Math.max(toOne, toZero)
}

console.log(solution('11000011 11100110'))