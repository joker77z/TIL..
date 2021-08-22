function solution(part, comp) {
    // 맵 선언
    const sH = new Map();
    
    for(let x of part) {
        sH.set(x, sH.get(x)+1 || 1);
    }
    
    for(let x of comp) {
        if(sH.has(x)) {
            sH.set(x, sH.get(x)-1);
        }
    }
    
    for(let [key, value] of sH) {
        if(value>0) {
            return key
        }
    }
}