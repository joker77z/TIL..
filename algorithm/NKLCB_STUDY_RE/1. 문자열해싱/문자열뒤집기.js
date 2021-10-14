/*
    문자열 s 주어지면 세 개 부분으로 나누고
    각 부분 뒤집고
    다시 원래 순으로 합치면 다양한 문자열 생성.
    사전순으로 가장 앞선 문자열 출력.

    ex

    kseaedu를 임의 세부분나누면
    ks, ea, edu
    각 부분 뒤집으면
    sk, ae, ude 다시합치면 skaeude 이런식 생성되는 문자열중 가장 빠른 문자열출력?
*/

function solution(string) {
    // 임의 3등분
    let n = string.length;
    let divide = parseInt(n / 3);
    let tmp = [];
    let cnt = 0;
    let answer = [];
    for (let i = 0; i < 2; i++) {
        tmp.push(string.slice(cnt, divide + cnt));
        cnt += 2;
    }
    tmp.push(string.slice(4))
    console.log(tmp)

    for (let i = 0; i < 3; i++) {
        tmp[i] = tmp[i].split('').reverse().join('');
    }
    console.log(tmp)

    for (let i = 0; i < 3; i++) {
        let tmpArr = [];
        tmpArr.push(tmp[i]);
        for (let j = 0; j < 3; j++) {
            if (i !== j) {
                tmpArr.push(tmp[j])
            }
        }
        answer.push([...tmpArr].join(''));
    }
    answer.sort((a, b) => a.charCodeAt() - b.charCodeAt());
    console.log(answer)
    return answer[0];
}
// console.log(solution("kseaedu"));   
console.log(solution("itistime"));