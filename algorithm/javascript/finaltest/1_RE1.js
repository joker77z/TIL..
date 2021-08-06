
function solution(words) {
    // words.sort((a, b) => b.length - a.length );
    // console.log(words)
    let answer = [];
    let flag = false;
    let sH = new Map();
    for (let j=0; j<words[0].length; j++) { // 한 개 단어길이
        let x = '';
        for(let i=0; i<words.length; i++) {
            if(x.length>0) { // x가 이미 있다면
                if(x === words[i][j]) {
                    answer.push(x);
                }
                else { // 다르다!
                    flag = true;
                    break;
                }
            }
            x = words[i][j];

        }
        if(flag) {
            break;
        }
    }
    
    return [...new Set(answer)].join('')
}


// console.log(solution(["a", "aaaaa", "aaaaaaaaaaaa"]))
console.log(solution(["longz", "longtime", "longest"]))