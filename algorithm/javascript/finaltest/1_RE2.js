
function solution(words) {
    // words.sort((a, b) => b.length - a.length );
    let unique = new Set();
    let answer = [];
    for(let i=0; i<words[0].length; i++) {
        for(let j=0; j<words.length; j++) {
            unique.add(words[j][i])
        }
        // console.log(i+1, unique, unique.size, i+1===unique.size)
        if(i+1 === unique.size) {
            answer.push(words[0].substring(0, i+1))
        } else {
            break;
        }
    }
    return answer[answer.length-1];
}


console.log(solution(["a", "aaaaa", "aaaaaaaaaaaa"]))
console.log(solution(["longz", "longztime", "longgest"]))