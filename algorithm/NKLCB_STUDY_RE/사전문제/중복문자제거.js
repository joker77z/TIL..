/*
    중복된 문자를 제거하고 출력.
    순서 유지.
*/

function solution(string) {
    let stringSet = new Set(string);
    stringSet = [...stringSet].join('');
    return stringSet
}
console.log(solution("ksekkset"));