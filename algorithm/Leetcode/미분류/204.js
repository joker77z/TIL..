Array(n).fill(0)

for(i = 2; i<n i++) { // 제곱근까지 돌아도 됌.
    if(ch[i] === 0) {
        cnt++
        // for(let j = 1; i<n; j+=1) {
        for(let j = i*i; i<n; j+=1) {
            ch[j]=1;
        }
    }
}