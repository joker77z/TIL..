/*
    최대 몇명 선물 사줄수있는지 return

    상품만 50% 할인 한번 가능.
*/
function solution(present, max) {
    let answer = 0;
    for (let i = 0; i < present.length; i++) {
        let tmp = 0;
        let cnt = 1;
        tmp += (present[i][0] / 2);
        tmp += present[i][1];
        console.log(tmp)
        for (let j = 0; j < present.length; j++) {
            if (i !== j && tmp < max) {
                tmp += present[j][0]
                tmp += present[j][1]
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
        console.log(answer)
    }
    return answer;
}
console.log(solution([
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3]
], 28));
console.log(solution([
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [6, 4]
], 27));
console.log(solution([
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1]
], 41));