function solution(s) {
    let answer = "";
    for(let x of s) {
        let num = x.charCodeAt();
        if(97<=num && num<=122) {
            answer += String.fromCharCode(num-32);
        } else {
            answer += String.fromCharCode(num+32);
        }
    }
    return answer;
}

console.log(solution("StuDY"));

function solutionB(s) {
    let answer = "";
    for(let x of s) {
        if(x === x.toUpperCase()) {
            answer += x.toLowerCase();
        } else {
            answer += x.toUpperCase();
        }
    }
    return answer;
}

console.log(solutionB("StuDY"));