// 서로 공통문자 없는 두 문자열 선택 곱해서 길이 최대값

function solution(words) {
    let answer = 0;
    let tmpArr = [];
    for (let i = 0; i < words.length; i++) {
        let tmp = words[i].split('');
        for (let j = 0; j < words.length; j++) {
            if (i !== j) {
                for (let k = 0; k < tmp.length; k++) {
                    if (words[j].includes(tmp[k])) {
                        break;
                    } else {
                        let mul = words[i].length * words[j].length;
                        answer = Math.max(answer, mul);
                    }
                }
            }
        }
    }
    return answer;
}
console.log(solution(["skudy", "kstue", "time", "back", "good"]));
// console.log(solution(["kk", "k", "kkk", "kkkkk", "kkkk"]));