
function solution(str) {
    const lowerStr = str.toLowerCase();
    const strToArr = lowerStr.split('');
    const newArr = [];
    let result = 0;
    strToArr.forEach(el => {
        if(!newArr.includes(el)) {
            newArr.push(el);
            result += 1
        } else {
            result -= 1
        }
    });

    if(result === 0) {
        return 'YES';
    } else {
        return 'NO';       
    }
}

console.log(solution("gattBG"));
