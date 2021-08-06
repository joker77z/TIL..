// 
function solution(nums) {
    let answer = 0;
    let dy = Array.from({length:nums.length}, () => 0);
    let pa = Array.from({length:nums.length}, () => -1);

    dy[0] = 1;
    for(let i=1; i<nums.length; i++) {
        // dy[i]=1; // 일단 자기혼자 있는데. 길이가 최소 1일꺼다 ,강의에서 다른 방식으로 해보겠다.
        let max  = 0;
        for(let j=i-1; j>=0; j--) {
            if(nums[j]<nums[i] && dy[j]>max) { // dy[j]에서 가장 큰 값. j들 중 최대값 찾아야 되니까. 앞에 있는 조건을 만족하는 것이. 뒤로 붙을 수 있는 수열들. 그 중에서 가장 큰거 뒤에 붙어야 된다.
                max = dy[j];
                pa[i]=j;
            }
        }
        dy[i] = max+1;
        if(dy[i]>answer) {
            answer = dy[i];
            pos=i;
        }
    }
    // console.log(pa) // -1, -1, 1, 2, 1, -1, 3, 5 (이거 필기한 부분notability 8.5 2번째. 12-2 변형)
    let path=[];
    function DFS(idx) {
        if(idx===-1) return;
        else {
            DFS(pa[idx]);
            path.push(nums[idx]);
        }
    }
    DFS(pos);
    console.log(path)
    return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])) // 4

//point: 이 문제의 정답은 없고 아무렇게나해서 구해지면 된다.
// 어떤시험에서는 길이 4짜리 수열을 출력해봐라. 이럴수도 있다.
// 수열까지 뽑아내라고 문제가 나올수도 있다. 어떻게 하면 될까?

// 배열이 하나 더 필요하다.



// function solution(nums) {
//     let dy = Array.from({length:nums.length}, () => 0);
//     dy[0] = 1;
//     for(let i=1; i<nums.length; i++) {
//         for(let j=0; j<i; j++) {
//             if(nums[i] > nums[j]) {
//                 dy[i] = dy[j] + 1;
//             }
//             else {
//                 // 더 작으면
//                 dy[i] = 1;
//             }
//         }
//     }
//     console.log(dy)
// }

// console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])) // 4