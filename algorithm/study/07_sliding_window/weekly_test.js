/*
    1. 20보다 작으면 더해준다.
    2. 20보다 크면 rt를 lt로 옮긴다.
    3. lt부터 다시시작한다.
    4. 20보다 작으면 더해준다.
*/

function solution(nums, m) {
    let lt = 0;
    let answer = 0;

    sum = 1;
    for(let rt=0; rt<nums.length; rt++) {
        sum *= nums[rt];
        // sum이 m보다 커버리면 이제 sum을 빼줘야 된다.
        while(sum>m) { // m이하. 
            sum = sum/nums[lt++]; // sum에서 nums[lt]뺴고 lt증가.
        }
        answer += (rt-lt+1); // 이 부분은 자기가 계산해서 맞다 생각하는 식을 써도 된다.
    }
    return answer;
}


console.log(solution([1, 3, 1, 2, 3], 5))


/*
    2 
    2 * 3 = 6
    2 * 3 * 3 = 18

    =======3========

    3
    3 * 3 = 9
    3 * 3 * 2 = 18
    
    =======3======

    3
    3 * 2 = 6
    
    ======2========

    2
    2 * 6 = 12
    6

    ======3========

    11개

*/