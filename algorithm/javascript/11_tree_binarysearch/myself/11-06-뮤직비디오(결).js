/*
    8.5 1:26 ~2:03

    ‣ 문제
    - 총 n개 곡.
    - 순서 바꾸지 말 것
    - m개 녹화(이 때 dvd크기는 최소로.)
    - m개 DVD는 모두 같은 크기.

    ‣ 입력
    nums : 노래개수 / n : 노래 분 / M :녹화할 개수
    [1, 2, 3, 4, 5, 6, 7, 8, 9], 3

    ‣ 출력
    DVD의 최소 용량 크기. 17

*/

function solution(nums, M) {
    // 결정 알고리즘
    // lt, rt를 미리 정한다.
    let answer = 0;
    let lt = Math.max(...nums);
    let rt = nums.reduce((acc, cur) => acc+cur, 0);

    function count(songs, capacity) {
        let cnt = 1;
        let sum = 0;

        for(let x of songs) {
            // sum에 x를 하나씩 더하다가 sum+x이 capacity를 넘어갔을 때 cnt를 하나 세고 sum을 그 다음 x로 바꾼다.(또 더해가야하니까)
            if(sum+x>capacity) {
                cnt++;
                sum = x;
            } else {
                sum = sum + x;
            }
            console.log(`x : ${x}, sum : ${sum}, capacity : ${capacity}, cnt : ${cnt}`)
        }
        return cnt;
    }
    while(lt<=rt) {
        let mid = parseInt((lt+rt)/2);
        if(count(nums, mid) <= M) { // 카세트 개수 3개보다 더 작다. rt를 좌측으로 옮겨서 최대용량을 줄여서 용량까지 다 더할 개수들을 늘린다.
            answer = mid;
            rt = mid-1;
        } else lt = mid+1;
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // 17