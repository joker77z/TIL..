// 8. 4 PM 10:40 ~ 10:57

// point: 
// 연결하고 연결되어있는지 확인할 때
// Find, Union을 필요할 때 가져다가 쓴다.
// Union으로 하나로 붙여주고 Find로 두 객체를 비교해서 하나로 묶여있는지 확인한다.


function solution(n, nums, s1, s2) {
    let answer = "YES";
    let unf = Array.from({length:n+1}, (v, i) => i); // 0~8까지 배열에 들어감.
    function Find(v) {
        if(v === unf[v]) return v;
        else return Find(unf[v]);
    }
    function Union(a, b) {
        let fa = Find(a);
        let fb = Find(b);
        if(fa!==fb) unf[fa] = fb;
    }

    // Union을 사용해서 연결한다.
    for(let [a, b] of nums) {
        Union(a, b);
    }
    if(Find(s1) !== Find(s2)) {
        answer = "NO";
    }
    return answer;
}

console.log(solution(9, [[1, 2], [2, 3], [3, 4], [1, 5], [6, 7], [7, 8], [8, 9]], 3, 8))  // NO