// 사과를 따는데 얘가 딸 수 있는 사과를 다 합해놓고 시작.
// 그 다음 투포인트.


function solution(apples, power, s) {
    let answer = 0;
    let apples_sum = 0;
    let sum = 0;
    let lt = 0;
    let n = 0;
    let max = 0;
    let result = 0;

    for(let i=0; i<apples.length; i++) {    // 사과 총 개수
        apples_sum += apples[i];
    }

    for(let rt=0; rt<power.length; rt++) {
        if(power[rt] === 0) { // 0일때만 줄여준다.
            let tmp = power;
            lt = rt;
            while(n<s) { // 0일 때 s번만큼 연속으로 1로 만들어준다.
                tmp[lt+n] = 1;
                n++;
                // max = apples_sum -= apples[lt];
                // result = Math.max(max, result)
            }
            // result = Math.max(max, result);
        }
    }
    return result;
}





console.log(solution([3, 2, 1, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)) // 9
// console.log(solution([3, 2, 3, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)) // 10