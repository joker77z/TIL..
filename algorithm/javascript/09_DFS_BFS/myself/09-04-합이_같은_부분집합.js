/*
    10:45 ~ 10:53
    
    ‣ 문제
    합이 같은 부분집합
    N개의 원소로 구성된 집합.
    두 개의 부분집합으로 나눴을 때 두 부분집합 원소합이 서로 같은 경우면 "YES" 아니면 "NO"

    둘로 나뉘는 부분집합은 서로소 집합이며, 두 부분집합을 합하면 입력으로 주어진 원래집합이 되어야함.

    지합의 총 합은 짝수로 이루어진다.

    ‣ 예시
    입력 : [1, 3, 5, 6, 7, 10]
    출력 : [1, 3, 5, 7] = [6, 10]  -> 16으로 같다.
*/

function solution(nums) {
    let answer = "NO";
    let n = nums.length;
    const total = nums.reduce((acc, cur) => acc+cur , 0);
    
    function DFS(L, sum) {
        if(L === n) {
            if((total-sum) === sum) {
                answer = "YES"
                return;
            }
        }
        else {
            DFS(L+1, sum+nums[L])
            DFS(L+1, sum)
        }
    }

    DFS(0, 0);

    return answer;
}

// console.log(solution([1, 3, 5, 6, 7, 10]))
// console.log(solution([3, 9, 11, 13]))