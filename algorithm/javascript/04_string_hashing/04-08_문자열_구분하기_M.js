/*
    8.1(일)
    3:30 ~ : 3:50
    
    ‣ 문제
    N개의 문자열이 주어지면 모든 문자열을 구분할 수 있는 최소길이 접두어를 찾는 프로그램 작성.

    ‣ 출력
    모든 문자열을 구분할 수 있는 최소길이 반환.

    ‣ 해설
    

    ‣ 깨달은 점
    - 문제가 안풀릴 때 엄청 작게 생각해서 파편화 하자.
    그러면 그 다음은 자연스럽게 생각이 나더라. 이 문제가 그랬다.

    - 문제가 안풀릴 때 예시를 엄청 간단화해서 2자리로 계산도 해보자.
    알고리즘에 더 집중할 수 있다.
*/

function solution(words) {
    const n = words.length;

    let min = Number.MAX_SAFE_INTEGER;

    for(let j=0; j<n-1; j++) {
        for(let i=0; i<words[0].length; i++) {
            if(words[j][i] !== words[j+1][i]) {
                let tmp = i+1;
                min = Math.min(tmp, min);
            }
        }
    }
    answer = min;
    return answer;
}





// console.log(solution(["seeasue", "sesseysu", "semeas"])) // 3
console.log(solution(["ackky", "kabck", "yokkcs"])) // 1
