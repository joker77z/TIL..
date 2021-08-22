/*
    문제
    가장 가까운 큰 수.
    N이 주어지면 N과 구성이 같으면서 N보다 큰 수 중 가장 작은 수 출력.

    출력
    N과 구성이 같으면서 큰 수중 가장 작은 수.
    없으면 -1
*/

function solution(n) {
    let answer=Number.MAX_SAFE_INTEGER;
    const nlength = n.toString().length;
    let arr = [];
    let max = [];
    let cnt = 0;

    // n을 일단 배열로 받아라.
    let tmp = n
    
    for(let i=0; i<nlength; i++) {
        arr.push(parseInt(tmp%10));
        tmp = tmp/10;
    }
    let ch = Array.from({length:arr.length+1}, ()=>0);

    function DFS(L) {
        if (L===arr.length){
            if(max.join('')>n) {
                // console.log(answer, max.join(''))
                answer = Math.min(answer, max.join(''));
                cnt++;
            } 
        }
        else { // 마지막에 max.
            for(let i=0; i<arr.length; i++) {
                if(ch[i] === 0) {
                    ch[i]=1;
                    max.push(arr[i]); // max = 1
                    DFS(L+1);
                    max.pop()
                    ch[i]=0;
                }
            }
        }
    }

    DFS(0);

    if(cnt>0) {
        return answer;
    }
    else {
        return -1;
    }
}

// console.log(solution(123)); // 132
// console.log(solution(321)); // -1
console.log(solution(20573)); // 20735