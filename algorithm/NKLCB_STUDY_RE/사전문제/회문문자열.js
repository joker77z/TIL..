/*
    앞뒤가 같다.
*/

function solution(string) {
    string = string.toLowerCase().split('');
    let tmp = [];
    let result = 0;
    let answer = 0;

    string.forEach(el => {
        if (!tmp.includes(el)) {
            tmp.push(el);
            result += 1;
        } else {
            result -= 1;
        }
    });
    if (result !== 0) answer = result;
    return answer;
}
console.log(solution("gooG"));
// console.log(solution("gattBG"));