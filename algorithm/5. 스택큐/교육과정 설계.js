/*
    A, B, C, D, E, F, G
    필수과목이 CBA면이 순서대로 계획을짜야함.(연속적일필요없이 순서만 지키면 됌)
    잘 짜여졌다면 "YES", 아니면 "NO"
    
    Pseudo Code
    동일한거 만날 때마다 CBA에서 한개씩 뺀다.
*/

function solution(string, target) {
    // stack화 시키기 위해 배열로 만든다.
    let stack = target.split('');
    let answer = "YES";
    for(let s of string) {
        if(stack.includes(s) && stack.shift() !== s) {
            answer = "NO";
        }
    }
    return answer;
} 
console.log(solution("CBDAGE", "CBA")); // YES
console.log(solution("CBDAGE", "CEB")); // NO