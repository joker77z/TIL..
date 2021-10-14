// 접미사 정렬

function solution(s) {
    let result = [];
    for(let i=0; i<s.length; i++) {
        result.push(s.substring(i, s.length))
    }
    result = result.sort();
    return result;
}

console.log(solution("kseaedu"))