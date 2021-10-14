/*
    모든 좌표를 오름차순으로 정렬.
    x기준으로 먼저 정렬하고 x가 같을 경우 y로 정렬.
*/

function solution(arr) {
    // x 정렬
    arr.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    })
    console.log(arr);
} 
console.log(solution([[2, 7], 
                      [1, 3], 
                      [1, 2], 
                      [2, 5], 
                      [3, 6]]));