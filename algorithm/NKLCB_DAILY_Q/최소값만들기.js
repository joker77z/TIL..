function solution(num, k) {
    let answer;
    let stack = [];
    num = String(num);

    if (num.length === k) return 0;

    for (let i = 0; i < num.length; i++) {
        /*
        스택이 비어있지 않고 k가 0보다 크고 
        스택의 상단이 num[i]보다 크면 계속 pop해준다
        */
        while (stack.length !== 0 && k > 0 && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        //그리고 push
        stack.push(num[i]);
    }


    //k가 0보다 크면 계속 k가 0이될때까지 계속 pop한다.
    while (k > 0) {
        stack.pop();
        k--;
    }

    answer = stack.join("");
    answer = Number(answer);

    return answer;
}

console.log(solution(2322113, 3)); //2113
console.log(solution(200200, 1)); //200
console.log(solution(123, 3)); //0
console.log(solution(23000, 2)); //0
console.log(solution(23000, 1)); //2000
console.log(solution(625437, 2)); //2437
console.log(solution(625437, 3)); //237
console.log(solution(625437, 4)); //23
console.log(solution(625437, 5)); //2
console.log(solution(625437, 6)); //0
console.log(solution(654321, 3)); //321
console.log(solution(2322113, 4)); //113
console.log(solution(2322113, 5)); //11
console.log(solution(2322113, 1)); //222113