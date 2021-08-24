/*
    가로, 세로, 대각선 중 최대합 answer에 갱신.

    Pseudo Code
    let sum1=sum2=0
    ans = NumberMax
    for(i=0 ~ i<arr.length)
        let sum1=sum2=0
        for(j=0 ~ j<arr[0].length)
            sum1 += 가로 최대합 누적
            sum2 += 세로 최대합 누적
        ans = Math.max(ans, sum1, sum2)
    sum1=sum2=0
    
    대각선 계산
    for(i=0 ~ i<arr.length)
        sum1 += a[i][i]
        sum2 += a[i][arr.length-i-1]
    ans = Math.max(ans, sum1, sum2)
*/

function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let sum1, sum2;
    for(let i=0; i<arr.length; i++) {
        sum1=sum2=0;
        for(let j=0; j<arr.length; j++) {
            sum1+=arr[i][j];
            sum2+=arr[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }
    sum1=sum2=0;
    for(let i=0; i<arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][arr.length-i-1];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
}

console.log(solution([[10, 13, 10, 12, 15], 
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]]))