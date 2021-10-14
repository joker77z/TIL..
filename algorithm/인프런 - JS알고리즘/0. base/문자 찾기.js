function solution(s, k) {
    let answer = 0;
    answer = s.split(k).length-1;
    return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'))