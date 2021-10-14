/*
    2차원 배열 1의 개수
    
    1의 개수가 가장 적은 행 번호부터 answer에 push해서 출력

    PseudoCode
    let answer = []
    for i=0; i<nums.length
        // nums[i]에서 1개수 세기
        let cnt = 0;
        for(let j=0 ~ nums[i].length)
            if(nums[i][j] === 1) cnt++
        answer

    [2, 1, 3, 2]
    for(let i=1; i<=n) 
        answer.push(nums.indexOf(i))
        
*/

function solution(nums) {
    for (let i = 0; i < nums.length; i++) {

    }
}
console.log(solution([
    [1, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]
])); // [1, 0, 3, 2]