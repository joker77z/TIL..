/*
    공통원소 구하기
    A, B 두 집합 공통원소 추출
    오름차순.
*/

function solution(arrA, arrB) {
    let answer = arrA.filter(el => arrB.includes(el));
    return answer.sort((a, b) => a - b);
}
console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 10]));