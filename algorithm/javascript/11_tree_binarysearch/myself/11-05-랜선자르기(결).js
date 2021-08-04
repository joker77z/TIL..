/*
    8.5 AM 12:31 ~ 1:16

    ‣ 문제
    - K개 랜선은 길이가 다 제 각각.
    - N개 같은길이로 만든다. 랜선을 잘라서 만든다.
    - N개보다 많이 만드는 것도 N개에 포함.
    ✨ 만들 수 있는 최대 랜선 길이를 구해라.

    ‣ 매개변수
    nums, N(만들 수 있는 최대 개수)

    ‣ 예제
    300cm짜리 랜선에서 140cm짜리 랜선을 두 개 잘라내면 20cm은 버려야 한다.

    정리하면 이 문제는 같은길이의 랜선을 11개 만들어야 하는데 11개 만들 때 랜선의 길이를 구하는 것이다.
*/

function solution(nums, N) {
    let answer = 0;
    let flag = false;
    // 결정 알고리즘.
    //1. lt, rt를 먼저 정한다.
    let lt = 1; // 선의 길이는 최소 1일테니까.
    let rt = Math.max(...nums);

    // 4. count 함수를 만든다.
    function count(line_length) {
        let cnt = 0;
        for(let x of nums) {
            cnt += Math.floor(x/line_length);
        }
        console.log(`${line_length}일 때 cnt값 ${cnt}`)
        if(cnt === N) {
            answer = line_length;
            flag = true;
        }
        return cnt;
    }

    // 2. while문으로 좁혀나간다.
    while(lt<=rt) {
        if(flag) {
            break;
        }
        // 3. mid값을 구한다.
        let mid = parseInt((lt+rt)/2);
        if(count(mid) < N) {
            rt = mid-1;
        } else {
            lt = mid+1;
        }
    }
    return answer;
}

console.log(solution([802, 743, 457, 539], 11));