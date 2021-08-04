/*
    8.5 AM 12:12 ~ 12:29
    문제

    행과 열이 오름차순으로 되어 있는 2차원 배열이 주어지면
    가장 효율적인 방법으로 특정 숫자 찾는 것.

    matrix에 n*m크기의 2차원 배열.
    target에 2차원 배열에서 찾아야 할 숫자가 주어진다.
    (2차원 배열에 target 숫자는 반드시 존재한다.)
*/

function solution(matrix, target) {
    // 인덱스로 row와 col을 사용한다.
    let row = 0;
    let col = matrix[0].length -1;

    while(row<matrix.length && col>=0) {
        // 만약 바로 찾았다면
        if(target === matrix[row][col]) return [row, col];
        // 만약 target이 첫줄에 제일 끝보다 크다면?
        else if(target > matrix[row][col]) row++;
        // 만약 target이 첫줄 제일 끝보다 더 작다면?
        else col--;
    }
}


console.log(solution([[1, 6, 9, 12], [3, 7, 10, 14], [5, 8, 13, 17], [15, 18, 20, 23]], 8)); // [2, 1]