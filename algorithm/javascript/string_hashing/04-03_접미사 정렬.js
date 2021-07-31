/*
    ‣ 문제
    문자열의 모든 접미사를 구하고
    사전순으로 출력하는 프로그램을 작성.

    ‣ 출력
    사전순으로 배열 전환

    ‣ 예시
    입력 : kseaedu
    출력 : ["aedu", "du", "eaedu", "edu", "kseaedu", "seaedu", "u"]
*/

// 4:35~ 4:38
function solution(s) {
    let answer = [];

    for(let i=0; i<s.length; i++) {
       answer.push(s.slice(i, s.length));
    }
    answer.sort();
    return answer;
}

console.log(solution("kseaedu"))