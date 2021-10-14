function dfs(v) {
    if(v > 7) return;
    else {
        dfs(v*2)
        console.log(v);
        dfs(v*2+1)
        // 후위순위는 안되는듯하다 ?
    }
}

dfs(1, 2, 3, 4, 5, 6, 7)