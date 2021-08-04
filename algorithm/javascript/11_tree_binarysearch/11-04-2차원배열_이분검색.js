/*
    문제

    행과 열이 오름차순으로 되어 있는 2차원 배열이 주어지면
    가장 효율적인 방법으로 특정 숫자 찾는 것.

    matrix에 n*m크기의 2차원 배열.
    target에 2차원 배열에서 찾아야 할 숫자가 주어진다.
    (2차원 배열에 target 숫자는 반드시 존재한다.)
*/

// 2차원에서도 이분 검색이 있다.
function solution(matrix, target) {
    let row = 0;;
    let col = matrix[0].length-1;
    while(row < matrix.length && col>=0) {
        if(matrix[row][col]===target) return [row, col];
        if(target<matrix[row][col]) col--;
        else row++;
    }
    return;
}

console.log(solution([[1, 6, 9, 12], [3, 7, 10, 14], [5, 8, 13, 17], [15, 18, 20, 23]], 8)); // [2, 1]