/*
    여러단위 동전들.
    거스름돈 가장 적은 개수.
*/

//point: 주어진 동전 단위들이 거스름돈과 딱딱 떨어지게 되어 있다.
// 그런거에만 적용 가능하다.
function solution(nums, m) {
    let answer = 0;
    nums.sort((a, b) => b -a)
    for(let i=0; i<nums.length; i++) {
        answer += parseInt(m/nums[i]);
        m = m%nums[i];
    }
    return answer;
}

console.log(solution([1, 5, 10], 15))