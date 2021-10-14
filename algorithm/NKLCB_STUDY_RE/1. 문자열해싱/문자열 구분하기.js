// 접두어 최소길이 반환

function solution(words) {
    words.sort((a, b) => b.length - a.length);
    console.log(words[0][0] === words[1][0])
    console.log(words[1][0] === words[2][0])
    let cnt = 1;
    for (let j = 0; j < words[0].length; j++) {
        for (let i = 0; i < words.length - 1; i++) {
            if (words[i][j] !== words[i + 1][j]) {
                return cnt;
            }
        }
        cnt++;
    }
}
console.log(solution(["seeasue", "sesseysu", "semeas"]));
console.log(solution(["ackky", "kabck", "yokkcs"]));
console.log(solution(["longlong", "longtong", "longbig"]));