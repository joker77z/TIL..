function solution(t, coins) {
    let answer = 0;
    let dy = Array.from({length:t+1}, ()=>0);
    dy[0] = 1;
    for(let [p, n] of coins) { // 금액: p, 개수: n
        for(let j=t; j>=1; j--) { // 바로 밑 k for문과 순서바꿔도 똑같다. 근데 이게 이해가 더빠르다.
            //5빼보고 10빼보고 15빼보고
            for(let k=1; k<=n; k++) { // 한개일때부터 동전개수까지
                // 음수가는거 커트해줘야 된다.
                if(j-(p*k)<0) break;
                // 여기서 다이나믹
                dy[j]+=dy[j-(p*k)];
            }
        }
    }
    answer = dy[t];
    return answer;
}

console.log(solution(20, [[5, 3], [10, 2], [1, 5]])) // 4