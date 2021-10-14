// 가위 바위 보
//  1   2  3


function solution(numA, numB) {
    let answer = [];
    for (let i = 0; i < numA.length; i++) {
        // 비겼을 때
        if (numA[i] === numB[i]) {
            answer.push('D')
        }
        if (Math.abs(numA[i] - numB[i]) === 1) {
            if (numA[i] > numB[i]) {
                answer.push('A');
            } else {
                answer.push('B');
            }
        } else if (Math.abs(numA[i] - numB[i]) === 2) {
            if (numA[i] > numB[i]) {
                answer.push('B');
            } else {
                answer.push('A');
            }
        }
    }
    return answer;
}
console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));