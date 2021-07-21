// 5번 : 재귀함수를 이용한 이진수 출력

let temp = [];
function recursive(num) {
    if(num === 1) {
        temp.push(1);
        console.log(temp.reverse().join(''));
    } else {
        let result = num%2;
        temp.push(result);
        num = parseInt(num/2);
        recursive(num);
    }
}

recursive(7);