/*
    ‣ 문제
    집에서 상점까지 타일이 깔려있다.
    i번째 타일에 적힌 수를 Ai
    i번째에서 오른쪽으로 Ai이하만큼 점프가능.

    ‣ 예시
    2번째 타일에 있고, 적힌 수가 3이면 3, 4, 5로 갈 수 있다.

    ‣ 구하는 것
    집에서 상점까지 최소 몇 번 점프?
    못가면 -1

    ‣ 매개변수
    (왼쪽 끝 집 , 오른쪽 끝 상점)
*/

function solution(nums) {
    function BFS() {
        let queue = [];
        let L=0;
        let ni=1;
        queue.push(nums[0]);

        while(queue.length) { // 큐에 수가 있다면
            let x = queue.shift();
            for(let i=0; i<x; i++) {
                queue.push(nums[i+ni])
            }
        }
        L++;
    }
    answer = BFS();
    return answer;
}

console.log(solution([2, 2, 0, 2, 1, 1])) // 3

// console.log(solution([1, 0, 1, 1, 3, 1, 2, 1])) // -1