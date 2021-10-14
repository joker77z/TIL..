/*
    1, 2, 8, 4, 9
    공유기 k개 설치.

    1. 최대 거리로 설치
    결과 : 최소 거리 값

    PseudoCode
    최소값 lt, 최대값 rt놓고 시작
    while(lt<=rt)로 mid구하고 nums를 순회하면서 mid값보다 큰지 작은지 구하기
    이 때 cnt++더하면서 arr에 push하면서 k달성 시 break;
    
    최소값 lt, 최대값 rt 놓고 시작.
    while(lt<=rt)
        mid = (lt+rt)/2
        
        start = nums[0]
        최소거리값이 mid니까 nums를 for문 돌면서 최소거리가면서 cnt가 몇개인지 확인
        for x of nums
            if(x - start > mid)
                cnt++
                start = x

        if cnt가 k와 같거나 크다면 최소거리를 늘려서 cnt를 줄인다.
            


        else cnt가 k보다 작다면 최소거리를 작게해서 cnt를 늘린다.

*/

// function isHome(nums, minDistance) {
//     let cnt = 1;
//     // nums를 다음꺼를 빼주면서 minDistance값보다 작다면 tmp에 더하면서 cnt++;
//     for(let i=0; i<nums.length-1; i++) {
//         if(nums[i+1]-nums[i] >= minDistance) {
//             cnt++;
//         }
//     }
//     console.log(cnt)
//     // 만약 cnt개수가 k와 같다면 해당 cnt개수로 건너뛰면서 return 받을 수 있는 함수에서 값 받도록.
//     return cnt;
// }
// function solution(nums, k) {
//     let answer = 0;
//     nums.sort((a, b) => a-b);
//     let lt = nums[1] - nums[0]; // 최소 거리값
//     let rt = nums[nums.length-1] - nums[0] // 최대 거리값
//     while(lt<=rt) {
//         let mid = parseInt((rt+lt)/2);
//         console.log(mid)
//         // 만약 함수 결과 공유기 설치된 집 개수가 k보다 작다면 mid값을 더 낮춰서 cnt개수를 늘린다.
//         if(isHome(nums, mid) < k) { 
//             rt = mid - 1;
//             console.log(rt)
//         }
//         // 공유기 설치된 집 개수가 k보다 더 많다면 최소 거리를 늘린다.
//         else {
//             lt = mid + 1;
//         }
//         answer = mid;
//     }
//     return answer;
// } 
// console.log(solution([1, 2, 8, 4, 9], 3));

function solution(nums, k) {
    nums.sort((a, b) => a-b);
    console.log(nums)

    let answer = 0;
    // 최소거리
    let lt = nums[1] - nums[0];

    // 최대거리
    let rt = nums[nums.length-1] - nums[0];
    
    while(lt<=rt) {
        // 최소거리
        let mid = parseInt((lt+rt)/2);
        // console.log(mid)

        // 최소거리보다 같거나 더 큰 거리가 있다면 cnt++;
        let start = nums[0];
        let cnt = 1;
        for(let x of nums) { // 1, 2, 4, 8, 9
            if(x-start >= mid) {
                cnt++;
                start = x;
            }
        }
        // console.log(cnt)

        // cnt(공유기 개수센거)가 k(설치해야 하는 공유기 수)보다 적다면 최소 거리를 낮춰서(mid를 낮춰서) 설치개수(cnt)를 늘린다.
        if(cnt < k) {
            rt = mid - 1;
            // console.log(mid)
        }
        // 최소거리를 최적값을 찾기 위해 거리를 반대로 늘린다. mid값을 올리기 위해 lt를 오른쪽으로 땡긴다.
        else {
            lt = mid + 1;
        }
        answer = mid;
    }
    return answer;
} 
console.log(solution([1, 2, 4, 8, 9], 3)); // 3