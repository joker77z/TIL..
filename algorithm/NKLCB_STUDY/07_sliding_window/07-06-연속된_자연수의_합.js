/*
    N입력으로 양의 정수 N이 입력되면 2개 이상의 연속된 자연수의 합으로 정수 N을 표현하는 방법의 가짓수를 출력하는 프로그램을 작성하세요.
    만약 N=15이면
    7+8=15
    4+5+6=15
    1+2+3+4+5=15
    와 같이 총 3가지의 경우가 존재한다.
*/

function solution(n) {
    let arr = Array.from({ length: parseInt(n / 2) + 1 }, (v, i) => i + 1);
    //point: 하나의 공식처럼 외우자. n으로 15가 주어졌을 때 1~8까지 중에서 연속된 수 2개 이상으로 연속된 수열을 만들 수 있다.

    let sum = 0;
    let lt = 0;
    let answer = 0;
  
    for (let rt = 0; rt < arr.length; rt++) {
      sum += arr[rt];
      if (sum === n) answer++;
      while (sum > n) {
        sum -= arr[lt++];
        if (sum === n) answer++;
      }
    }
    return answer;
  }
  console.log(solution(15));

