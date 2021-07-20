function solution(str) {
    const strArr = str.split('');
    const uniqueArr = [];
    strArr.forEach(el => {
        if(!uniqueArr.includes(el)) {
            uniqueArr.push(el)
        }
    })
    return uniqueArr.join('');
}

console.log(solution('ksekkset'));