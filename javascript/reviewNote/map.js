let a = [1, 2, 3];

const a_mapping = a.map(el => {
    if(el%2==0) {
        return "짝수입니다."
    } else {
        return "홀수입니다."
    }
})

console.log(a_mapping) // [ '홀수입니다.', '짝수입니다.', '홀수입니다.' ]


const a_mapping2 = a.map(el => {
    return el*el
})

console.log(a_mapping2) // 1, 4, 9