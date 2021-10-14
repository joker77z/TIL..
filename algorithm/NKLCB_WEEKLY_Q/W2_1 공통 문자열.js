/*
    공통문자열
    long, longtime, longest 세 단어의 접두어 return

    답은 long

    PseudoCode
    짧은거부터 긴 순으로 배치하고
    let cnt = 0;
    for(let i=0; i<제일긴거.length);
        let tmp = arr[0][i]
        for(let j=1 ; j<=arr.length)
            if(cnt === 2) {
                answer = arr.slice(0, i);
                flag = true;
                break;
            }
            if(tmp!==arr[j][i]) {
                cnt++;
            }
        if(flag) {
            break;
        }
*/

function solution(strings) {
    let cnt = 0;
    let answer = [];
    let flag = false;
    strings.sort((a, b) => a.length - b.length);
    for (let i = 0; i < strings[strings.length - 1].length; i++) {
        let tmp = strings[0][i];
        for (let j = 1; j < strings.length; j++) {
            if (cnt === 2) {
                answer = strings[2].slice(0, i - 1);
                flag = true;
                break;
            }
            if (tmp !== strings[j][i]) {
                cnt++;
            }
        }
        if (flag) {
            break;
        }
    }
    return answer;
}
console.log(solution(["log", "longet", "longest"]));




function solution(strs) {
    let answer = "";
    let len = Number.MAX_SAFE_INTEGER;
    strs.forEach(x => {
        len = Math.min(len, x.length);
    });
    for (let i = 0; i < len; i++) {
        let s = new Set();
        strs.forEach(x => {
            s.add(x[i]);
        });
        if (s.size === 1) answer += strs[0][i];
    }
    return answer;
}

console.log(solution(["long", "longtime", "longest"]));






function solution(strs) {
    let answer = "";
    let len = Number.MAX_SAFE_INTEGER;
    strs.forEach(x => {
        len = Math.min(len, x.length);
    });
    for (let i = 0; i < len; i++) {
        let m = new Map();
        strs.forEach(x => {
            m.set(x[i], (m.get(x[i]) || 0) + 1);
        });
        if (m.get(strs[0][i]) === strs.length) answer += strs[0][i];
    }
    return answer;
}

console.log(solution(["long", "longtime", "longest"]));