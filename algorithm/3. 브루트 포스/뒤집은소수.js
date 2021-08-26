/*
    자연수를 뒤집은 후 소수면 출력해라.
    
    Pseudo Code
    for(x of nums)
        let res=0;
        let t=0;
        while(x) {
            t=x%10;
            res=res*10+t;
            x=x/10;
        }
*/
// 소수인지 검증
function isPrime(num) {
    if(num===1) return false;
    for(let i=2; i<num/2; i++) {
        if(num%i===0) return false;
    }
    return true;
}

function solution(nums) {
    let answer = [];
    for(let x of nums) {
        let res = 0;
        while(x) {
            let t=x%10;
            res=res*10+t;
            x = parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]))
// 23 2 73 2 3