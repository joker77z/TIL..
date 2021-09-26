/*
    12:12~

    배열 A을 준다.
    가장큰 값 X를 리턴
    which occurs in A exactly X times.

    만약 찾는 값이 없다면 0을 리턴해라.

    ---
    예시
    1. [3, 8, 2, 3, 3, 2] return 3을 리턴한다. 제일 많이 반복됬으니까.
    2. [7, 1, 2, 8, 2] return 2
*/

function solution(nums) {
    // set를 쓴다
    let nH = new Map();
    let answer = 0;

    for (let n of nums) {
        nH.set(n, nH.get(n) + 1 || 1);
    }
    console.log(...nH)
    for (let [key, value] of nH) {
        if (key === value) {
            answer = Math.max(answer, key);
        }
    }
    return answer;
}

console.log(solution([7, 1, 2, 8, 2]))
console.log(solution([3, 8, 2, 3, 3, 2]))
console.log(solution([5, 5, 5, 5, 5]))
console.log(solution([3, 1, 4, 1, 5]))