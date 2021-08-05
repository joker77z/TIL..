/*
    ‣ 문제
    2차원배열에서 각 행의 1을 더해서
    새로운 배열을 만들고
    그 배열에서 갯수가 적은->큰 순으로
    2차원 배열에서 배열들의 인덱스를 정렬하라.
*/

function solution(nums) {
    // map 사용해서 각 행의 index, 1의개수로 새로 만들자.
    let answer = nums.map((row, i) => ({
        i, cnt: row.reduce((a, b) => {
           return a+b;     
        }, 0)})).sort((a, b) => a.cnt - b.cnt).map((el) => {
            return el.i;
        })
    return answer;
}

console.log(solution([[1, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]]))