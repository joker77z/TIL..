function solution(string) {
    let sH = new Map();
    let answer = "";
    let max = Number.MIN_SAFE_INTEGER
    for (let s of string) {
        sH.set(s, sH.get(s) + 1 || 1);
    }
    for (let [key, value] of sH) {
        if (max < value) {
            max = value;
            answer = key;
        }
    }
    return answer;
}
console.log(solution("BACBACCACCBDEDE")); // C