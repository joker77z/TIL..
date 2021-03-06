/*
    문제    
    연속부분 수열의 합이 M되는 경우 몇번인지

    예시
    [1, 2, 3, -3, 1, 2], M=3
    합이3인건
    [1, 2], [1, 2, 3, -3], ... 총 6가지.

    풀이
    point: 어려운 문제다.
    lt, rt가 아니라 map을 이용해서 계산하는데
    만약 nums[i]를 더했을 때 sum이면 answer++하고
    동시에 map에다가 sum을 키값으로해서 추가시킨다.

    그러다가 만약 맵에 (sum-m)이 있다면 answer에 sum-m만큼 추가시킨다.
    예를 들어서 1, 2, 3, -3일 때 

*/

function solution(nums, m) {
    let answer = 0;
    let sum = 0;
    let nH = new Map();
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        if(sum === m) answer++;
        if(nH.has(sum-m)) {
            answer += nH.get(sum-m);
        }
        nH.set(sum, nH.get(sum)+1 || 1);
    }
    return answer;
}

console.log(solution([1, 2, 3, -3, 1, 2], 3)) // 6