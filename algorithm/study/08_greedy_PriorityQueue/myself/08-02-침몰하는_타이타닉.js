/*
    8.5 PM 10:40 ~

    ‣ 문제
    구명보트 2명 이하 탑승 가능.
    최대 m(kg) 탑승 가능.

    모두 탈출위한 최소 구명보트 개수

    ‣ 그리디 문제.

    예시 : [90, 50, 70, 100, 60], 140
    답 : 3


    ‣ 풀이
    내 생각대로 해보자.
*/

function solution(nums, m) {
    let lt = 0;
    let rt = nums.length-1;
    let answer = 0;

    nums.sort((a, b) => a-b) // 오름차순.
    while(lt<rt) {
        if(nums[lt] + nums[rt] > m) { // 제일 좌측과 제일 우측을 더한 값이 m보다 작다면
            rt--;
            answer++; // 모든 생존자가 목표이기 때문에 혼자라도 타고 간다.

        } else { // m보다 작다면
            answer++;
            lt++;
            rt--;
        }
    }
    return answer;
}

console.log(solution([90, 50, 70, 100, 60], 140)) // 3

// 110, 130, 160, 190 2개

// 푸는 방법을 또 바꾼다.
// 50, 70더하고 -> 50+60 더하고 -> 60+ 70더하자.