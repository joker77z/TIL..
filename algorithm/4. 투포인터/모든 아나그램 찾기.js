/*
    S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열 개수를 구해라.

    ex) bacaAacba, abc가 주어졌을 때
    {bac}, {acb}, {cba} 3개 부분문자열이 "abc"와 아나그램이다.

    Pseudo Code
    한글
    문자열 2개를 base로 hash map에 넣은다음 다음 1개를 넣고
    비교하고(별도의 비교 함수 생성 => 여기서 동일한걸 찾으면 ++)
    제일 처음꺼 한개를 뺀다.
*/
function compareMaps(map1, map2) {
    // 구성이 동일한지 확인
    if(map1.size !== map2.size) return false;
    for(let [key, value] of map1) {
        if(!map2.has(key)) return false;
        if(map2.get(key) !== value) return false;
    }
    return true;
}
function solution(string, target) {
    // s1에서 앞 문자열 2개를 기본적인 hash map에 넣는다.
    let n = target.length - 1; // 3-1 = 2
    let sH = new Map();
    let tH = new Map(); // target의 hash map
    let answer = 0;
    let lt = 0;
    // target을 hash map으로 만든다.
    for(let i=0; i<target.length; i++) {
        tH.set(target[i], tH.get(target[i])+1 || 1);
    }
    // 처음 두개 비교한걸 저장.
    for(let i=0; i<n; i++) {
        sH.set(string[i], sH.get(string[i])+1 || 1);
    }
    // 다음 1개 더하고 비교하고 앞에꺼 한개빼고
    for(let i=n; i<string.length; i++) {
        sH.set(string[i], sH.get(string[i])+1 || 1);
        // sH랑 tH랑 비교해서 구성이 같으면 answer++
        if(compareMaps(sH, tH)) {
            answer++;
            console.log(sH)
        }
        // 맨앞에꺼 빼주기. 만약에 값이 0이면 delete하기
        sH.set(string[lt], sH.get(string[lt])-1);
        if(sH.get(string[lt]) === 0 ) sH.delete(string[lt]);
        lt++;
    }
    return answer;
}

console.log(solution('bacaAacba', 'abc')); // 