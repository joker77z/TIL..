/*
    회의 시작시간, 끝나는 시간 주어져있다. 최대 회의수 return
    끝나는 것과 동시에 시작 할 수 있다.    
*/


function solution(arr) {
    arr.sort((a,b) => {
        // 만약 끝나는 시간이 같다면 시작 순으로 정렬
        if(a[1] === b[1]) return a[0] - b[0];
        // 끝나는 시간 오름차순으로 정렬
        return a[1] - b[1];
    });
    console.log(arr)
    let answer = 1;
    let tmp = arr[0][1];
    for(let i=1; i<arr.length; i++) {
        if(tmp <= arr[i][0]) {
            tmp = arr[i][1];
            answer++;
        }
    }
    return answer;
} 

// console.log(solution([[1, 4], 
//                       [2, 3], 
//                       [3, 5], 
//                       [4, 6], 
//                       [5, 7]]));

// console.log(solution([[3, 3], 
//                     [1, 3], 
//                     [2, 3]
//                     ]));



// 강의에서 푼 방식
function solutionB(arr) {
    arr.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    let answer= 0;
    let et = 0;
    for(let x of arr) {
        if(x[0] >= et) {
            et = x[1];
            answer++;
        }
    }
    return answer;
} 
console.log(solutionB([[1, 4], 
    [2, 3], 
    [3, 5], 
    [4, 6], 
    [5, 7]]));

// console.log(solution([[3, 3], 
//                     [1, 3], 
//                     [2, 3]
//                     ]));