/*
    뒤집은 소수
*/

function solution(nums) {
    let answer = [];

    function isPrime(n) {
        if (n === 1) return false;
        if (n === 2) return true;

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let x of nums) {
        x = Number(x.toString().split('').reverse().join(''));
        if (isPrime(x)) {
            answer.push(x);
            console.log(answer);
        }
    }
    return answer;
}
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
// [23, 2, 73, 2, 3]