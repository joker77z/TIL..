/*
    1. 0과 1을 교환한다.
    2. 0 or 1을 한 개 선택해서 뒤집는다.
    
    최소회수 return
*/

// try2 해답보고
function solution(numbersData) {
    let numbers = numbersData.split(' ');
    let [start, target] = numbers;
    let cntZero = 0;
    let cntOne = 0;
    let answer = 0;
    console.log(start)

    for (let i = 0; i < start.length; i++) {
        if (start[i] !== target[i]) {
            if (start[i] === '1') cntOne++;
            else cntZero++;
        }
    }
    return answer = Math.max(cntZero, cntOne);
}
// console.log(solution("11000111 11100110"));
// console.log(solution("11000111 11111110")); // 답 : 3

// try1: 답은 맞지만 이건 아닌듯하다.
// function solution(nums1, nums2) {
//     let answer = 0;
//     for (let i = 0; i < nums1.length; i++) {
//         if (nums1[i] !== nums2[i]) {
//             answer++;
//         }
//     }
//     return answer - 1;
// }
// console.log(solution("11000111", "11100110")); // 답 : 1
// console.log(solution("11000111", "11111110")); // 답 : 3