// 비트 연산자 이용해서 푸는 문제.

// nums : 1번~N번 학생들의 음식 취향
// d : 양념의 종류
// k : 선생님이 사용할 수 있는 재료의 종류

// 반환 : 최대 인원

function solution(nums, d, k) {
    let answer = Number.MIN_SAFE_INTEGER; // 최대구해야되서.
    const n = nums.length; // 학생수
    let pow=Array.from({length:d+1}, ()=>0); // 양념번호에다가 가중치주려고. d가 양념개수니까.
    let st=Array.from({length:n}, ()=>0); // student. 선호도가 들어간다.

    // pow index번호를 양념번호라고 생각해라.
    pow[1]=1; // 1번 인덱스에 1
    for(let i=2; i<=d; i++) { // 2번 인덱스에2. 3번 인덱스에 4.
        pow[i]=pow[i-1]*2;
    }
    for(let i=0; i<n; i++) { // n명을 다 넣어보겠다.
        for(let j=0; j<nums[i].length; j++){ // 학생이 선호하는 양념의 개수
            st[i]+=pow[nums[i][j]] // i번 학생의 가중치가 완성된다. j for문이 다 돌고나면.
        }
    }
    console.log(st)
    // 학생들꺼는 다 구해놨다.
    // 이제 재귀돌면서 dCk 돌면서 몇명의 학생이 먹을 수 있는지 하면 된다.
    function DFS(L, s, bit) {
        if(L===k){ // k가 3이면 1, 2, 3이렇게 되는거고 2면 1, 2되는거고.
            //음식을 만들 때마다 이 음식은 몇명이 먹을 수 있을지 카운트
            let cnt=0;
            for(let j=0; j<n; j++) {
                // if문 뒤에 괄호 치는것에 유의하자.
                if((bit & st[j]) === st[j]) {// 음식하고 st[j]하고 비트연산자를 했다.
                    cnt++;
                }
            }
            // for문이 다 돌고나면 학생수가 나온다.
            // 음식마다 이걸해보면 제일 큰 학생수가 나올 것이다.
            answer = Math.max(answer, cnt);
        }
        else{
            for(let i=s; i<=d; i++) {// i는 양념번호다 
                DFS(L+1, i+1, bit+pow[i]); // 조합은 그냥 외우라고 그랬다. L하고 s쓰는건.
            }
        }
    }
    DFS(0, 1, 0);
    return answer
}
console.log(solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3)) // 6