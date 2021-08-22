/*
    공통문자 찾기.
*/

function solution(words) {
    const sH = new Map();
    let answer, i;

    for(i=0; i<words[0].length; i++) {
        let flag = true;
        for(let j=0; j<words.length; j++) {
            // words의 0번째 데이터중 제일 앞 요소를 뽑는다.
            let x = words[j].substring(0, i+1);
            if(sH.has(x)) {
                flag = false;
                break;
            }
            sH.set(x, 1);
        }
        if(flag) {
            break;
        }
    }
    answer = i+1
    return answer;
}

console.log(solution(["seeasue", "sesseysu", "semeas"]))