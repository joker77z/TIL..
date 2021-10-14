/*
    공통원소 오름차순 정렬
*/


function solution(arr1, arr2) {
    arr1.sort((a, b) => a-b);
    arr2.sort((a, b) => a-b);
    // console.log(arr1, arr2);
    let answer = [];
    let p1=0;
    let p2=0;
    let n = arr1.length;

    while(p1<n && p2<n) {
        if(arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1]);
            p1++;
            p2++;
        } else if(arr1[p1] < arr2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }
    return answer;
}


console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));