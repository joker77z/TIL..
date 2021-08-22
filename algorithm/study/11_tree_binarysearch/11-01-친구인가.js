/*
    반 학생 N명
    친구관계 알고 싶다.

    모든학생 1~ N번호.
    두 명의학생 짝지어져있는 것. 친구.

    숫자쌍이 주어지면 두 명이 친구인지 판별.
    친구면 "YES", 아니면 "NO"

    n : 학생 수
    nums : 숫자 쌍
    s1, s2에 두 학생이 친구인지 확인해야 되는 학생번호.
*/

function solution(n, nums, s1, s2){
    let anwer = "YES";
    let unf = Array.from({length:n+1}, (v, i) => i);
    function Find(v) {
        if(v===unf[v]) return v;
        else return Find(unf[v]);
    }
    function Union(a, b) {
        let fa=Find(a);
        let fb=Find(b); // 노드의 집합번호
        // fa하고 fb가 다르더라. 다른집합이더라. 둘이 유니온시켜준다.
        // 이렇게하면 유니온된다.
        if(fa!==fb) unf[fa]=fb;
    }
    // point: find만하고 union 안쓸 때도 있다.
    // point: find& union 한 코드로 외워놔라.

    // 이제 문제풀어야 된다.
    for(let [a, b] of nums) {
        Union(a, b);
    }
    if(Find(s1) !== Find(s2)) answer="NO";

    return answer;
}



console.log(solution(9, [[1, 2], [2, 3], [3, 4], [1, 5], [6, 7], [7, 8], [8, 9]], 3, 8)); // NO