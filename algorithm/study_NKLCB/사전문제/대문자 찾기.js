/*
    대문자 몇개인지 알아내기
*/

function solution(string) {
    let stringCopy = string.toUpperCase();
    console.log(stringCopy)
    console.log(string)
    let answer = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === stringCopy[i]) {
            answer += string[i];
        }
    }
    return answer.length;
}
console.log(solution("KoreaTimeGood"));