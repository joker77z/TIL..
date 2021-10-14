/*
    홀수의 개수가 k개인 연속부분 수열 개수를 구하려 한다.

    PseudoCode
    for(i=0 ~ i<n)
        if nums[i] %2 === 1 cnt++;
        if(cnt===k) 
            answer++;
        while(cnt>k)
            if nums[lt]%2 === 1 cnt--;
            lt++
    

    예시
    nums = [1, 2, 1, 1, 2] 
    m = 2
*/

function solution(nums, k) {
  let answer = 0;
  function continueFunc(k) {
    let tmp = 0;
    let lt = 0;
    let cnt = 0;
    for (let rt = 0; rt < nums.length; rt++) {
      // 홀수면 cnt++;
      if (nums[rt] % 2 === 1) {
        cnt++;
      }
      while (cnt > k) {
        if (nums[lt] % 2 === 1) {
          cnt--;
          lt++;
        } else {
          lt++;
        }
      }
      tmp += rt - lt + 1;
      console.log(tmp);
    }
    console.log(tmp);
    return tmp;
  }
  answer = continueFunc(k) - continueFunc(k - 1);
  return answer;
}
console.log(solution([1, 2, 1, 1, 2], 2));
// console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
// console.log(solution([2, 4, 6], 1));
