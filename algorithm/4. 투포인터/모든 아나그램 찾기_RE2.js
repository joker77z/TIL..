

function compareMap(map1, map2) {
    // 사이즈 다르면 false;
    if(map1.size !== map2.size) return false;
    for(let [key, value] of map1) {
        // map2에 가지고 있지 않는 key값을 sH에서 가지고 있으면 false;
        if(!map2.has(key)) return false;
        // 값이 다르면 false
        if(map2.get(key) !== value) return false;
    }
    console.log(map2)
    // 다 통과하면 true를 반환
    return true;
}

function solution(string, target) {
    let lt = 0;
    let sH = new Map();
    let tH = new Map();
    let answer = 0;

    // tH 선언
    for(let x of target) {
        tH.set(x, tH.get(x)+1 || 1);
    }
    // sH 2개 넣고 비교
    let n = target.length-1;
    for(let i = 0; i<n; i++) {
        sH.set(string[i], sH.get(string[i])+1 || 1);
    }

    // 비교하고 다음꺼 추가하고 첫번째꺼 빼는 식.
    for(let i=n; i<string.length; i++) {
        // 제일 뒤 추가
        sH.set(string[i], sH.get(string[i])+1 || 1)
        if(compareMap(sH, tH)) {
            answer++;
            // console.log(sH)
        }
        // 첫번째꺼 하나 빼자.
        sH.set(string[lt], sH.get(string[lt])-1);
        // 뺐는데 비어있으면 제거해버리자. 
        if(sH.get(string[lt]) === 0) sH.delete(string[lt]);
        lt++;
    }
    return answer;
}

console.log(solution('bacaAacba', 'abc'));