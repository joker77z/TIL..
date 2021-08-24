/*
    앞에서 읽으나 뒤에서 읽으나 같으면 "회문 문자열"
    회문 문자열이면 "YES", 아니면 "NO"
    (대소문자를 구분하지 않는다.)

    Pseudo Code
    s = 모두 소문자로 만든다.
    for(뒤에서부터)
        tmp에 더해서
    s와 tmp가 다르면 NO
*/

function solution(s) {
    let ans = "YES";
    let tmp = "";
    s = s.toLowerCase();
    for(let i=s.length-1; i>=0; i--) {
        tmp+=s[i];
    }
    if(s!==tmp) ans = "NO";
    return ans;
}

console.log(solution('gooG'));
console.log(solution('gzoG'));

function solutionB(s) {
    let ans = "YES";
    s = s.toLowerCase();
    let lt = 0;
    let rt = s.length-1;

    while(lt<=rt) {
        if(s[lt] !== s[rt]) {
            ans = "NO";
            break;
        }
        lt++;
        rt--;
    }
    return ans;
}

console.log(solutionB('gooG'));
console.log(solutionB('gzoG'));

function solutionC(s) {
    let ans = "YES";
    s = s.toLowerCase();
    mid = s.length/2;
    for(let i=0; i<mid; i++) {
        if(s[i] !== s[s.length-i-1]) ans = "NO";
    }
    return ans;
}

console.log(solutionC('gooG'));
console.log(solutionC('gzoG'));

function solutionD(s) {
    let ans = "YES";
    s = s.toLowerCase();
    if(s.split('').reverse().join('') !== s) ans = "NO";
    return ans;
}

console.log(solutionD('gooG'));
console.log(solutionD('gzoG'));