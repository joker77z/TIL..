/*
    1~100사이 카드 N장.
    3장을 뽑아서 합한 값 기록.
    모든 경우를 기록.
    K번째 큰 수를 return

    ex. 25 25 23 23 22고 K가 3이면 22 출력.

    PseudoCode
    3개의 값씩 더하는 모든 경우의 수를 구하고 k번째 값을 구해라.

    for(let i=0; i<nums.length; i++)
        for(let j=0; j<nums.length; j++)
            for(let k=0; k<nums.length; k++)
                

*/
function solution(nums, m) {
    let arr = [];
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(k=j+1; k<nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                arr.push(sum);
            }
        }
    }
    let tmp = new Set(arr);
    arr = [...tmp];
    arr.sort((a, b) => b-a);
    answer = arr[m-1];
    return answer;
}



console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3)); // 143