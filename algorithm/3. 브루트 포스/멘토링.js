/*
    멘토는 모든 점수가 멘티보다 높아야 한다.
    멘토와 멘티가 짝이 되는 경우의 수

    Pseudo Code
    for(i=1 ~ i=4)
        for(j=1 ~ j=4)
            pi=0, pj=0
            for(s=0 ~ s=2)
                for(k=0 ~ k=3)
                    if(matrix[s][k] === i) pi = s
                    else if(matrix[s][k] === j) pj = s

            if(pi > pj) break;
            cnt++;
*/

function solution(exams) {
    let answer = 0;
    let m = exams.length;
    let n = exams[0].length;
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            let cnt = 0;
            for(let s=0; s<m; s++) {
                let pi=pj=0;
                for(let k=0; k<n; k++) {
                    if(exams[s][k] === i) pi = k;
                    if(exams[s][k] === j) pj = k;
                }
                if(pi<pj) cnt++;
            }
            if(m === cnt) answer++;
        }
    }
    return answer;
}

console.log(solution([[3, 4, 1, 2],[4, 3, 2, 1],[3, 1, 4, 2]])) // 3