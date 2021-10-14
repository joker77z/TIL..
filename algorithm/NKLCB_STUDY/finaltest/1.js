
function solution(words) {
    words.sort((a, b) => b.length - a.length );
    console.log(words)
    let answer = "";
    let sH = new Map();
    for (let i=0; i<words[0].length; i++) { // 단어길이
        let flag= true;
        let cnt=words.length-1;
        for(let j=words.length-1; j>=0; j--) { // 3
            let x = words[j].substring(0, i+1);
            if(sH.has(x)) { // 가지고 있다면
                cnt--;
                answer = x; // 계속 갱신된다.
                if(cnt===0) {
                    flag = false;
                    break
                }
                }
            sH.set(x, 1);
        }
        if(flag) {
            break;
        }
    }
    return answer;
}


console.log(solution(["a", "aaaaa", "aaaaaaaaaaaa"]))
console.log(solution(["longz", "longztime", "longest"]))