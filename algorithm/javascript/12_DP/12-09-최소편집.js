function solution(s1, s2) {
    let answer = 0;
    let len1 = s1.length;
    let len2 = s2.length;
    // let dy = Array.from({length:s1.length+1}, ()=>Array.from({length:s2.length+1}, ()=>0));
    let dy=Array.from(Array(1001), ()=>Array(1001).fill(0));
    for(let i=1; i<=len1; i++) dy[i][0] = i;
    for(let i=1; i<=len2; i++) dy[0][i] = i;
    //TODO: 다음에 코드 치기.
}

console.log(solution("BAOBAB", "BACBA"))