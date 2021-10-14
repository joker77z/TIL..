// 사과를 따는데 얘가 딸 수 있는 사과를 다 합해놓고 시작.
// 그 다음 투포인트.


function solution(apples, power, s) {
    let answer = 0;

    let max = 0;
    apples = apples.map((el, index) => { // appes에서 power가 1인것들을 apples로 덮어쓴다.
        if(power[index] === 1) {
            el = 0;
            max += apples[index];
        }
        return el;
    })
    max = sum;
    for(let rt=0; rt<apples.length; rt++) {
        apples[rt]
    }

    return answer;
}





console.log(solution([3, 2, 1, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)) // 9
// console.log(solution([3, 2, 3, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)) // 10