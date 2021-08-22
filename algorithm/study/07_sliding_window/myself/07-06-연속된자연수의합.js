/*
    문제
    N입력으로 양의 정수 N이 입력되면 2개 이상의 연속된 자연수의 합으로 정수 N을 표현하는 방법의 가짓수를 출력하는 프로그램을 작성하세요.
    만약 N=15이면
    7+8=15
    4+5+6=15
    1+2+3+4+5=15
    와 같이 총 3가지의 경우가 존재한다.

    풀이
    point: 이 문제의 포인트는 parseint(n/2)+1이다. (v, i) => i+1 이걸로 1~8까지 만들고
    똑같이 lt, rt를 0부터 더해준다.
    sum이 m보다 넘어가면 다시 while(sum>m) sum -= arr[lt++]를 해주고 answer++해주면 된다.
*/

function solution(m) {
    let nums = Array.from({length:parseInt(m/2)+1}, (v, i) => i+1);
    let lt = 0;
    let sum = 0;
    let answer = 0;

    for(let rt=0; rt<nums.length; rt++) {
        sum += nums[rt];
        if(sum === m) answer ++;
        while(sum>m) {
            sum -= nums[lt++];
            if(sum === m) answer++;
        }
    }
    return answer;
}

console.log(solution(15));