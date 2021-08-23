function solution(s) {
    let n = s.length;
    let ans = "";
    if(n%2==0) {
        ans = s.slice(n/2-1, n/2+1);
    } else {
        ans = s.slice(Math.floor(n/2), Math.floor(n/2)+1);
    }
    return ans;
}

// console.log(solution("study"))
// console.log(solution("good"))

function solutionB(s) {
    let mid = Math.floor(s.length/2);
    let ans = "";
    if(s.length%2==0) {
        ans = s.slice(mid-1, mid+1);
    } else {
        ans = s.slice(mid, mid+1);
    }
    return ans;
}

console.log(solution("study"))
console.log(solutionB("good"))

function solutionC(s) {
    let mid = Math.floor(s.length/2);
    let ans = "";
    if(s.length%2==0) {
        ans = s.subStr(mid-1, 2);
    } else {
        ans = s.subStr(mid, 1);
    }
    return ans;
}

console.log(solution("study"))
console.log(solutionB("good"))