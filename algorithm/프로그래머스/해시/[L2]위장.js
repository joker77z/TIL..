/*
    3:44 ~ 3:55 고민 ~ 4:05 해설
    
    🌟 이해한 바 정리
    header기어분류에서 2개가 있다. 쓰거나 안쓰는 경우에서 경우의 수 3개
    eye기어분류 1개가 있다. 쓰거나 안쓰는 경우 1개
    두 경우를 곱하면 6인데
    두개다 쓰지 않는 경우 1가지를 뺴서 5.
*/

// 참조보고 풀이

function solution(clothes) {
    let answer = 1;
    let clothMap = new Map();

    for (let cloth of clothes) {
        clothMap.set(cloth[1], clothMap.get(cloth[1]) + 1 || 1);
    }
    console.log(clothMap)

    for (let [key, value] of clothMap) {
        answer = answer * (value + 1);
    }
    return answer - 1;
}

console.log(solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"]
]));

// 참조
// function solution(clothes) {
//     var answer = 1;

//     let sorts = {};
//     for (let cloth of clothes) {
//         if (sorts[cloth[1]]) {
//             sorts[cloth[1]]++;
//         } else {
//             sorts[cloth[1]] = 1;
//         }
//     }
//     console.log(sorts)

//     for (let i of Object.keys(sorts)) {
//         console.log(sorts[i])
//         answer *= sorts[i] + 1;
//         console.log(answer)
//     }

//     return answer - 1;
// }
// console.log(solution([
//     ["yellowhat", "headgear"],
//     ["bluesunglasses", "eyewear"],
//     ["green_turban", "headgear"]
// ]));

// 참조2
// function solution(clothes) {
//     var answer = 1;
//     var obj = {};
//     for (var i = 0; i < clothes.length; i++) {
//         obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
//     }
//     console.log(obj)
//     for (var key in obj) {
//         answer *= obj[key];
//     }

//     return answer - 1;
// }
// console.log(solution([
//     ["yellowhat", "headgear"],
//     ["bluesunglasses", "eyewear"],
//     ["green_turban", "headgear"]
// ]));