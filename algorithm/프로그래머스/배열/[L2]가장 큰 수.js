/*
    정수를 이어붙여서 가장 큰 수 만들기
    
    try1 : 2중 for문으로 만들어보기 X
    try2 : DFS로 모든 경우의 수
    PseudoCode
    
*/

function solution(nums) {
    let answer = nums.map(n => n + '').sort((a, b) => {
        return (b + a) - (a + b)
    }).join('');

    answer = answer[0] === 0 ? '0' : answer;
    return answer;
}
console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0]));

function solutionB(nums) {
    let answer = nums.sort((a, b) => {
        return (b + a) - (a + b)
    }).join('');

    answer = answer[0] === 0 ? '0' : answer;
    return answer;
}
console.log(solutionB([6, 10, 2]));
console.log(solutionB([3, 30, 34, 5, 9]));
console.log(solutionB([0, 0, 0]));


/*
    106 - 610 => 106

    106

    210 - 102 => 
    

*/