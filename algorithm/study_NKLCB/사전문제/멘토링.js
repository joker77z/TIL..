/*
    특정 등수가 특정 등수보다 계속 앞쪽에 있으면 +1

    PseudoCode
    1. 사람 번호 1, 2, 3, 4 로 재배열
    2. 비교
*/

function solution(nums) {
    let testCount = nums.length;
    let studentCount = nums[0].length;
    let newArr = [];

    // 재배열
    for (let j = 1; j <= studentCount; j++) {
        let tmpArr = [];
        for (let i = 0; i < testCount; i++) {
            tmpArr.push(nums[i].indexOf(j) + 1)
        }
        newArr.push(tmpArr);
        console.log(newArr)
    }

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[0].length; j++) {

        }
    }
}
console.log(solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2]
]));


// 정답
// 2-6. 멘토링
// function solution(arr) {
//     const students = arr[0].length; // 4
//     const test = arr.length; // 3
//     const newArr = [];
//     let count = 0;
//     // 배열 다시 만들기
//     for (let i = 1; i < students+1; i++) {
//       let temp = [];
//       for (let j = 0; j < test; j++) {
//         temp.push(arr[j].indexOf(i)+1);
//       }
//       newArr.push(temp)
//     }
//     console.log(newArr);

//     // 다시 만든 배열로 모든 학생들의 점수를 비교하며 모든 시험에서 더 많은 성적을 받은 학생의 수 카운트.
//     for (let i=0; i<newArr.length; i++) { // 0 ~ 2
//       let tmp = 0;
//       for (let j=0; j<newArr.length; j++) { // 0 ~ 2
//         for (let z=0; z<newArr[0].length; z++) {
//           if(newArr[i][z] > newArr[j][z]) {
//             tmp += 1;
//           } else {
//             continue;
//           }
//           if(tmp===test) {
//             count += 1
//           }
//         }
//       }
//     }
//     return count;
//   }

//   console.log(
//     solution([
//       [3, 4, 1, 2],
//       [4, 3, 2, 1],
//       [3, 1, 4, 2]
//     ])
//   );