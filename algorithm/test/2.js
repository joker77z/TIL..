function solution(nums) {
    nums.sort((a, b) => a - b);
    let tmpArr = [];
    let answer = 0;

    for (let i = 1; i <= nums.length; i++) {
        tmpArr.push(i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (tmpArr[i] !== nums[i]) {
            answer += tmpArr[i] - nums[i];
        }
    }
    answer = Math.abs(answer);
    if (answer > 1000000000) answer = -1;
    console.log(tmpArr)
    console.log(nums)
    return answer;
}
console.log(solution([1, 2, 1]));
// console.log(solution([2, 1, 4, 4]));
// console.log(solution([1, 2, 1]));


// function solution(nums) {
//     let max = Math.max(...nums);
//     let nH = new Map();
//     let tH = new Map();

//     for (let x of nums) {
//         nH.set(x, nH.get(x) + 1 || 1);
//     }
//     for (let i = 1; i <= nums.length; i++) {
//         tH.set(i, 1);
//     }

//     // tH 하나씩 받는데 tH에 있는 것이 nH에 없다면 tH의 key - Nh의 key를 뺀다.
//     for (let [key, value] of tH) {
//         // 가지고 있지 않다면
//         if (!nH.has(key)) {
//             console.log(nH)
//         }
//     }
// }
// console.log(solution([1, 2, 1]));