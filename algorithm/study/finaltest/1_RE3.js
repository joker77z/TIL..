
function solution(words) {
    words.sort((a, b) => b.length - a.length );
    let answer = [];
    for(let i=0; i<words[0].length; i++) {
        let flag = false;
        for(let j=0; j<words.length-1; j++) {
            // console.log(answer, words[j][i], words[j+1][i])
            if(words[j][i] !== words[j+1][i]) {
                answer.pop()
                flag = true;
                break;
            } else {
                answer.push(words[j][i]);
            }
        }
        if(flag) {
            break;
        }
    }

    return [...new Set(answer)].join('')
}


console.log(solution(["a", "aaaaa", "aaaaaaaaaaaa"]))
console.log(solution(["lon", "lon", "lo"]))
console.log(solution(["long", "longztime", "longzest"]))