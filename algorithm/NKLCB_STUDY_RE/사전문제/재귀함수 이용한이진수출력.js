function solution(number) {
    let answer = "";

    function recursive(n) {
        if (n === 1) {
            answer += n;
        } else {
            let mok = parseInt(n / 2);
            let tmp = n % 2;
            recursive(mok)
            answer += tmp
        }
    }
    recursive(number);
    return answer;
}
console.log(solution(11));