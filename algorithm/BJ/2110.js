/*
    1, 2, 8, 4, 9
    공유기 k개 설치.

    1. 최대 거리로 설치
    결과 : 최소 거리 값

    PseudoCode
    최소값 lt, 최대값 rt놓고 시작
    while(lt<=rt)로 mid구하고 nums를 순회하면서 mid값보다 큰지 작은지 구하기
    이 때 cnt++더하면서 arr에 push하면서 k달성 시 break;
    

    1 2 4 8 9
*/
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5 3
  1
  2
  8
  4
  9
`
).split('\n');


function isHome(nums, minDistance) {
    let cnt = 1;
    // nums를 다음꺼를 빼주면서 minDistance값보다 작다면 tmp에 더하면서 cnt++;
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i+1]-nums[i] >= minDistance) {
            cnt++;
        }
    }
    console.log(cnt)
    // 만약 cnt개수가 k와 같다면 해당 cnt개수로 건너뛰면서 return 받을 수 있는 함수에서 값 받도록.
    return cnt;
}
function solution(nums, k) {
    let answer = 0;
    nums.sort((a, b) => a-b);
    let lt = nums[1] - nums[0]; // 최소 거리값
    let rt = nums[nums.length-1] - nums[0] // 최대 거리값
    while(lt<=rt) {
        let mid = parseInt((rt+lt)/2);
        console.log(mid)
        // 만약 함수 결과 공유기 설치된 집 개수가 k보다 작다면 mid값을 더 낮춰서 cnt개수를 늘린다.
        if(isHome(nums, mid) < k) { 
            rt = mid - 1;
            console.log(rt)
        }
        // 공유기 설치된 집 개수가 k보다 더 많다면 최소 거리를 늘린다.
        else {
            lt = mid + 1;
        }
        answer = mid;
    }
    return answer;
} 
console.log(solution([1, 2, 8, 4, 9], 3));