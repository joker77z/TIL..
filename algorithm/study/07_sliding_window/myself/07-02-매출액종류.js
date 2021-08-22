/*
    문제
    N일동안 매출기록. 연속된K일동안 매출액의 종류. 구간별로 구해라.

    N=7이고 K=4면
    20 12 20 10 23 17 10에서
    4개씩 나누면
    [20, 12, 20, 10]
    [12, 20, 10, 23] 
    이런식으로 나눠지고 매출액의 종류는
    [20, 12, 10]으로 첫번째 행 3종류.
    [12, 20, 10, 23]으로 두번째 행 4종류.

    구간별 매출액의 종류를 더해서 출력.
    [3, 4, 4, 3]

    풀이
    1. 4개의 구간끼리 계속 구해야되니까 처음에 3개의 구간을 잡아서 nH해놓고.

    2. lt, rt를 이용해서 rt가 하나씩 늘어나고 lt도하나씩 늘어나게해서
    rt에 있는 숫자를 더하고 answer.push(nH.size)로 키 개수를 푸쉬해준다.
    다음 lt에 있는 숫자를 빼준다. 만약 0이라면 아예 키값을 지워준다.
*/

function solutionA(nums, k) {
    let answer = [];
    let nH = new Map();
    for(let i=0; i<k-1; i++) {
        nH.set(nums[i], nH.get(nums[i])+1 || 1);
    }
    for(let i=k-1; i<nums.length; i++) {
        nH.set(nums[i], nH.get(nums[i])+1 || 1);
        answer.push(nH.size);
        nH.set(nums[i-(k-1)], nH.get(nums[i-(k-1)])-1);
        if(nH.get(nums[i-(k-1)]) === 0) {
            nH.delete(nums[i-(k-1)]);
        }
        console.log(nH)
        console.log(`answer: ${answer} ✨ nH: ${nums[i-(k-1)]}`)
    }
    return answer;
}

console.log(solutionA([20, 12, 20, 10, 23, 17, 10], 4))


// lt를 사용해서 조금 더 보기 편하게 하는 방법
function solutionB(nums, k) {
    let answer = [];
    let nH = new Map();
    let lt = 0;

    for(let rt=0; rt<k-1; rt++) {
        nH.set(nums[rt], nH.get(nums[rt])+1 || 1);
    }
    for(let rt=k-1; rt<nums.length; rt++) {
        nH.set(nums[rt], nH.get(nums[rt])+1 || 1);
        answer.push(nH.size);
        nH.set(nums[lt], nH.get(nums[lt])-1);
        if(nH.get(nums[lt]) === 0) {
            nH.delete(nums[lt]);
        }
        lt++;
    }
    return answer;
}
console.log(solutionB([20, 12, 20, 10, 23, 17, 10], 4))