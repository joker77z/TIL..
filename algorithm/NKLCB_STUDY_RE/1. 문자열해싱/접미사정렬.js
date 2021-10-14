function solution(string) {
    let answer = [];
    for (let i = string.length - 1; i >= 0; i--) {
        answer.push(string.slice(i, string.length))
    }
    answer.sort((a, b) => a.charCodeAt() - b.charCodeAt())
    console.log(answer)
    return answer;
}
console.log(solution("kseaedu"));