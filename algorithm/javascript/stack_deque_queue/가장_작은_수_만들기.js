function solution(num, k) {
    // 숫자 배열화
    let nums = [];
    num = String(num)
    for(x of num) {
        nums.push(x);
    }

    let stack = [];
    let cnt = 0;

    for(let i=0; i<nums.length; i++) {
        if(stack.length === 0) {
            stack.push(nums[i]); // 처음에 2를 스택에 넣는다.
            continue;
        }
        
        if(stack[stack.length-1] > nums[i]){ // 마지막 스택에 들어가있는 것보다 작으면 스택 마지막과 교체.
            stack.pop();
            stack.push(nums[i]);
            cnt++;
        } else if (stack[stack.length-1] == nums[i+1]){
            stack.pop();
        } else { // 더 클때
            stack.push(nums[i]);
        }
        console.log(stack)
    }
    return stack.join('');
}

console.log(solution(2322113, 3))
