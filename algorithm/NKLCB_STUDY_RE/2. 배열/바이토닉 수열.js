// 증가했다가 감소하는 수열

/*
    - 증가했다가 감소해야된다.
    - 동일한 값 있으면 안된다.


    생각 : 증가하는 변수 while문 써서 결과 1이 나와야 되고
    감소하는 문도 while문도 써서 결과 1이 나오게?
    
    PseudoCode
        for i=0 i<nums.length
            if(up > 1 || down > 1) false
            if nums[i] === nums[i+1] false
            if(nums[i] < nums[i+1]) 
                while(nums[i] < nums[i+1])
                    i++
                up++
            if(nums[i] > nums[i+1])
                while(nums[i] > nums[i+1])
                    i++
                down++
            
*/

function solution(nums) {
    let answer = "NO";
    let up = 0;
    let down = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) answer = "NO";
        if (nums[i] < nums[i + 1]) {
            while (nums[i] < nums[i + 1]) {
                i++;
            }
            up++;
        }
        if (nums[i] > nums[i + 1]) {
            while (nums[i] > nums[i + 1]) {
                i++;
            }
            down++;
        }
    }
    console.log(up, down)
    if (up === 1 && down === 1) answer = "YES";
    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 3, 1])); // YES
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3])); // NO
console.log(solution([1, 2, 3, 4, 5])); // NO