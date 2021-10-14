/*
    Pseudo Code
    물건가격+배달가격 오름차순으로 정렬
    for(물품들)
        첫번째 물건 가격만 50%할인
        for(물품들)
            sum = 가격+배달비 더한다.
            cnt++
            if(sum>m)
                break
        Math.max(ans, cnt)
        
        다음 물건 50% 할인
        --반복--


    
*/
function solution(products, m) {
    let answer = Number.MIN_SAFE_INTEGER;
    let tmpProducts = [];
    products.sort((a, b) => {
        return (a[0] + a[1]) - (b[0] + b[1]);
    })
    for (let i = 0; i < products.length; i++) {
        tmpProducts = products.slice(); // FIXME: 깊은 복사가 안되는 이유?
        console.log(products)
        // let tmpProducts = [...products];
        tmpProducts[i][0] = tmpProducts[i][0] / 2;
        let cnt = 0;
        let sum = 0;
        for (let j = 0; j < products.length; j++) {
            sum += tmpProducts[j][0] + tmpProducts[j][1];
            cnt++;
            if (sum > m) {
                break;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

// console.log(solution([
//     [6, 6],
//     [2, 2],
//     [4, 3],
//     [4, 5],
//     [10, 3]
// ], 28)); // 4

// ----------------------

function solutionB(products, m) {
    let n = products.length;
    let answer = 0;
    for(let i=0; i<n; i++) {
        let sum = m - (products[i][0]/2 + products[i][1]);
        let cnt = 1;
        for(let j=0; j<n; j++) {
            if(i!==j && sum<0) break;
            if(i!==j && sum>=0) {
                sum = sum - (products[j][0] + products[j][1]);
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

console.log(solutionB([
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3]
], 28)); // 4