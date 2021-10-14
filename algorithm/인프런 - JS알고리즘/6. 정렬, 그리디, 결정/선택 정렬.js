/*
    N개의숫자 오름차순으로 저열
    선택정렬로 정렬하기.

    //POINT:선택정렬
    제일처음 원소의 위치를 기억하고 있는 상태에서 다음원소부터 끝까지 확인해서 더 작은 것이 있으면 현재 위치와 교체한다.

    선택정렬 : 제일 앞부터 제일 작은 수로 정렬된다.
    한개를 고르고 쭉 살펴보면서 더 작은 수를 찾고 더 작은수가 없나 확인하고 위치를 바꾼다.

    버블정렬 : 2개씩 뒤집으면서 가장 큰 수가 뒤로 배치된다.
    두개씩 보면서 비교하면서 값을 바꾼다. 맨 뒤부터(가장큰값) 결정되니 j는 i씩을 빼면서 본다.
*/

function solution(nums) {
    for(let i=0; i<nums.length; i++) {
        let idx = i;
        for(let j=i+1; j<nums.length; j++) {
            if(nums[idx] > nums[j]) {
                idx = j;
            }
        }
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
        // let tmp = nums[i];
        // nums[i] = nums[idx];
        // nums[idx] = tmp;
        console.log(nums)
    }
} 
console.log(solution([13, 5, 11, 7, 23, 15]));


// 인덱스로 안풀고 다른 방법으로 풀어보자.
// 아래 방법으로는 안된다! 훨씬 복잡하게 해야한다. 시도해보길 잘했다. 
// 만약 서로 값을 바꾼 뒤에도 뒤에꺼와 계속 탐색해야되는 일에는 index를 기억하는 식으로 활용하자.
// function solutionB(nums) {
//     for(let i=0; i<nums.length; i++) {
//         let tmp = nums[i];
//         for(let j=i+1; j<nums.length; j++) {
//             if(tmp > nums[j]) {
//                 [nums[j], tmp] = [tmp, nums[j]];

//             }
//         }
//         console.log(nums)
//     }
// } 
// console.log(solutionB([13, 5, 11, 7, 23, 15]));