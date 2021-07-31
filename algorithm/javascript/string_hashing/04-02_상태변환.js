/*
  ◽️ 문제 : 상태변환
  문자열이 주어지면 문자열을 목표한 상태로 만드려고 한다.
  1. 임의로 0과 1 두 개를 선택해서 서로 위치를 교환.
  2. 임의로 0또는 1 한개를 선택해 뒤집는다.

  ◽️ 예시.
  11000111. 목표 11100110
  3번째 0과 8번째 1을 서로 바꾸면 1번만에 목표 달성.
  최소횟수 구하기.
  
  ◽️ 예시2.
  11000111 -> 11111110.
  1. 3번째와 8번째 교환. +1
  2. 4번째 1로 바꿈 +1
  3. 5번째 1로 바꿈 +1
  4. 정답 3.

  ◽️ 출력
  최소 횟수 출력

  ◽️ 풀이
  1. 다른 부분에서 one의 개수를 더하고 zero의 개수를 더한다.
  2. Math.max(one, zero)를 한다.
  이게 어떻게 될지 궁금하다면 다양한 반례를 만들어보면 이게 말이 된다는게 나온다.

  ◽️ 깨달은 것
  문제에서 보이는 것 그대로 풀지 말고 문제를 파악해라.
  다양한 시각에서 문제를 바라봐라.
  */
 
function solution (nums) {
  data = nums.split(' ');
  let [base, goal] = data;
  let one = 0;
  let zero = 0;
  let result = 0;

  for(let i=0; i<base.length; i++) {
    if(base[i] !== goal[i]) {
      if(base[i] === '1') {
        one++;
      } else {
        zero++;
      }
    }
  }
  result = Math.max(one, zero)
  return result;
}

console.log(solution("11000111 11100110"))