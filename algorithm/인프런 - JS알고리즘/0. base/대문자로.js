function solution(s) {
    // 소문자일 시 대문자로 변환
    let answer = "";
    for(let x of s) {
        let num = x.charCodeAt();
        if(num>=97 && num<=122) {
            // answer += x.toUpperCase();
            answer += String.fromCharCode(num-32);
        } else {
            answer += x;
        }
    }
    return answer;
}

console.log(solution("ItisTimeToStudy"))