function dfs(v) {
    if(v > 7) return;
    else {
        console.log(v);
        dfs(v*2)
        dfs(v*2+1)
    }
}

dfs(1, 2, 3, 4, 5, 6, 7)