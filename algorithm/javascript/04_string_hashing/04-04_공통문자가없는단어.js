/*
    7.31(토)
    18:56~
    ❗️ 다음에 다시 풀기

    ‣ 문제
    N개의 문자열. 공통문자가 없는 두 문자열을 선택해 두 문자열의 길이를 곱했을 때 최대값 출력하는 프로그램
    
    ‣ 처음 생각 풀이
    1. 공통문자가 없는 문자열 2개 선택
    2. 두 문자열의 길이를 곱해서 임시 변수에 저장.
    3. 임시 변수에 저장한 것과 비교해서 최대값이면 저장.
    4. 임시 변수 출력

    ‣ 풀이 정리
    1. 문자열들을 오름차순으로 정렬한다. 
    이유는 왼쪽에 있는 문자열이 오른쪽에 있는 문자열보다 적어야 왼쪽에 있는 것들을 하나씩 꺼내보며 오른쪾에 있는지 확인하기 때문.
    2. 1번 문자열과 2번 문자열. 1, 3번 / 1, 4 번 / 1, 5 번 -> 2, 3번 문자열 / 2, 4번 문자열 순으로 비교한다.
    3. 만약 Unique하다면 두 문자열의 길이를 곱한 값을 임시 변수에 저장한다. 그 전 임시변수에 있는것과 Math.max()하면서 계속 비교한다.
    4. 변수에 저장했던 최대값 return

    ‣ 깨달은 점
    ❗️ 사소한 실수를 줄이자. for문을 집중적으로 다시 제대로 보자.
    
*/


function solution(words) {
    let answer = 0;
    // 1. 길이 오름차순 정렬
    words.sort((a, b) => a.length - b.length)

    for(let i=0; i<words.length-1; i++) {
        for(let j=i+1; j<words.length; j++) {
            if(isUnique(words[i], words[j])) { // 유니크하면
                let tmp = words[i].length * words[j].length;
                answer = Math.max(tmp, answer);
            }
        }
    }

    function isUnique(short, long) {
        for(let x of short) {
            if(long.indexOf(x) !== -1) { // 공통요소가 있다.
                return false; // 공통요소가 있으니 isUnique가 실행못하게 한다.
            }
        }
        return true; // for문을 돌았는데 공통요소가 아무것도 없었다면.
    }

    return answer;
}

console.log(solution(["skudy", "kstue", "time", "back", "good"])) // 20