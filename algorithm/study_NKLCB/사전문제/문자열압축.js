function solution(string) {
    let answer = "";
    let cnt = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[i + 1]) {
            answer += string[i];
            if (cnt > 1) {
                answer += cnt;
                cnt = 1;
            }
        } else {
            cnt++;
        }
    }
    return answer;
}
console.log(solution("KKHSSSSSSSE"));