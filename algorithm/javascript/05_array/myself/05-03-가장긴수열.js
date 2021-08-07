function solution(nums) {
    let answer = 0;
    let cnt =0;
    let up = 1;
    let down = 1;
    let MaxUp = 0;
    let MaxDown = 0;

    // 내가 생각하는데로 해보기.
    for(let i=1; i<nums.length; i++) {
        if(nums[i] < nums[i+1]) {// 다음 것이 더 클 때
            up++;
            console.log(`i번째 : ${i}, up ; ${up}, maxup : ${ MaxUp}`)
        } else {
            MaxUp = Math.max(MaxUp, up);
            up = 1;
        }

        if(nums[i] > nums[i+1]) {// 더 작을 때
            down++;
        }
        else {
            MaxDown = Math.max(MaxDown, down);
            down = 1;
        }
        // MaxUp = Math.max(MaxUp, up);
        // MaxDown = Math.max(MaxDown, up);

        answer = Math.max(MaxUp, MaxDown);
    }
    return answer;
}

// console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2])) // 5
console.log(solution([5, 2, 4, 7, 6, 3, 9, 10, 11])) // 4
// console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7])) // 5