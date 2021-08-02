/*
    8.1 

    ❗️ 참고
    

    ‣ 문제
    10이하 N개 자연수 주어지면 이 중 M개를 뽑아서 일렬로 나열하는 방법 모두 출력

    입력 : n, m
    출력 : 배열형태로 반환.

    ‣ 예시
    입력 : [3, 6, 9], 2
    출력 : [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]

    ‣ 해설
    
    ‣ 깨달은 점

*/  


// i는 인덱스로 도니까 0부터 돌아야 한다.

function solution(nums, m) {
    let answer = [], tmp= [];
    let ch = Array.from({length:nums.length+1}, ()=>0);
    function DFS(L) {
        if(L===m) {
            answer.push(tmp.slice());
        }
        else {
            for(let i=0; i<nums.length; i++) {
                if(ch[i] === 0) {
                    ch[i]=1;
                    tmp.push(nums[i]);
                    DFS(L+1); 
                    tmp.pop();
                    ch[i]=0;
                }
            }
        }
    }

    DFS(0);
    return answer;
}

console.log(solution([3, 6, 9], 2))