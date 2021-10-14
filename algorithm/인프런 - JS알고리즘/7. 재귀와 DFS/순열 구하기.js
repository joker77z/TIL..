/*
    10이하 N개
    m개를 뽑아서 일렬로 나열 모든 경우의 수를 배열로 더하고
    배열의 개수 return

    ex
    [3, 6, 9], 2
*/

function solution(nums, m) {
    let answer = [];
    let tmp = [];
    function DFS(L, num) {
        if(L===m) answer.push(tmp.slice());
        else {
            for(let i=0; i<nums.length; i++) {
                if(nums[i] !== num) {
                    tmp.push(nums[i]);
                    DFS(L+1, nums[i])
                    tmp.pop();
                }
            }
        }
    }
    DFS(0, 0);
    return answer.length;
} 
// console.log(solution([3, 6, 9], 2));

// 강좌 방법 : 방문한 곳은 1로 체크하는 방법.
function solutionB(nums, m) {
    let answer = [];
    let n = nums.length;
    let tmp = [];
    let check = Array.from({length: n}, () => 0);
    function DFS(L) {
        if(L===m) answer.push(tmp.slice());
        else {
            for(let i=0; i<n; i++) {
                if(check[i]!==1) {
                    check[i] = 1;
                    tmp[L] = nums[i];
                    DFS(L+1);
                    check[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer.length;
} 
console.log(solutionB([3, 6, 9], 2));


// 두 방법을 섞어보자.
function solutionC(nums, m) {
    let answer = [];
    let n = nums.length;
    let tmp = [];
    let check = Array.from({length: n}, () => 0);
    function DFS(L) {
        if(L===m) answer.push(tmp.slice());
        else {
            for(let i=0; i<n; i++) {
                if(check[i]!==1) {
                    check[i] = 1;
                    tmp.push(nums[i]);
                    DFS(L+1);
                    tmp.pop()
                    check[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer.length;
} 
console.log(solutionC([3, 6, 9], 2));