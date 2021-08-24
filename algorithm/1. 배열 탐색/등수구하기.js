/*
    등수를 출력.

    같은 점수일 경우 높은 등수로 처리.
    즉, 92점이 3명이면 1등이 3명, 그 다음은 4등.
*/

function solution(score) {
    let answer = [];
    for(let i=0; i<score.length; i++) {
        let rank = 1;
        for(let j=0; j<score.length; j++) {
            if(score[i] < score[j]) rank++;
        }
        answer.push(rank);
    }
    return answer;
}

console.log(solution([87, 89, 92, 100, 76])) // 4 3 2 1 5
console.log(solution([90, 90, 90, 82, 100])) // 4 3 2 1 5

function solutionB(score) {
    let answer = Array.from({length:score.length}, () => 1);
    for(let i=0; i<score.length; i++) {
        for(let j=0; j<score.length; j++) {
            if(score[i] < score[j]) {
                answer[i]++;
            }
        }
    }
    return answer;
}

console.log(solutionB([87, 89, 92, 100, 76])) // 4 3 2 1 5
console.log(solutionB([90, 90, 90, 82, 100])) // 4 3 2 1 5