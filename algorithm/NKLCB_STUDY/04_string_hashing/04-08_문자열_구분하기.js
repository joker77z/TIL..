/*
    8.1(일)
    3:30 ~ : 3:50
    
    ‣ 문제
    N개의 문자열이 주어지면 모든 문자열을 구분할 수 있는 최소길이 접두어를 찾는 프로그램 작성.

    ‣ 출력
    모든 문자열을 구분할 수 있는 최소길이 반환.

    ‣ 해설
    1. 첫번째 단어가 들어왔을 때 첫번째 단어의 첫번째 요소를 기준으로
    2. 두번째, 세번째 단어가 돌면서
    3. slice를 이용해서 일부단어씩 map에 저장하면서
    4. 첫번째 단어에서 저장한 map에 두번쨰 단어에서 일부요소의 map이 포함되어 있다면 그건 그 부분에서 구별되는 것이 아니므로
    5. 두번째 세번째 단어를 도는 작업을 break한다. 첫번째 단어에서 다음요소로 넘어가고 반복한다.

    6. 근데 만약 4번에서 포함되어 있지 않아서 끝까지 돈다면 첫번째 단어에서 다음요소로 돌기 직전에 break되고 답은 i+1이다.

    ‣ 깨달은 점
*/

function solution(words) {
    let answer, i;
    let sH = new Map();
    for (i = 0; i < words[0].length; i++) {
        let flag = true;
        for (let j = 0; j < words.length; j++) {
            let x = words[j].substring(0, i + 1);
            if (sH.has(x)) {
                flag = false;
                break;
            }
            sH.set(x, 1);
        }
        if (flag) break;
    }
    answer = i + 1;
    return answer;
}

console.log(solution(["seeasue", "sesseysu", "semeas"]))
// console.log(solution(["ackky", "kabck", "yokkcs"]))
// console.log(solution(["longlong", "longtong", "longbig"]))