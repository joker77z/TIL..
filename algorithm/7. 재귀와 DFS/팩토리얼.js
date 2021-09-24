function solution(number) {
    if(number === 0) return 1;
    else {
        return number * solution(number-1);
    }
}
console.log(solution(5));
