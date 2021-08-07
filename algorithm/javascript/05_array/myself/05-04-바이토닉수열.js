function solution(nums) {
    let answer = "YES";
    // 다음 원소가 더 크면 계속 개수를 센다.
    let i = 0;
    let n = nums.length;

    while(i < n-1 && nums[i] < nums[i+1]) {
        i++;
    }
    // 증가수열 밖에 없으면 NO
    if(i===n-1 || i===0) answer = "NO";

    // 다음 원소가 작아질 때 계속 개수를 센다.
    while(i < n-1 && nums[i] > nums[i+1]) {
        i++;
    }
    // 두개 합친 개수가 원소 길이 개수와 다르다면 NO
    if(i !== n-1) answer = "NO";
    return answer;
}

// console.log(solution([1, 2, 3, 4, 5, 3, 1])) // YES
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3])) // NO
console.log(solution([1, 2, 3, 4, 5])) // NO
console.log(solution([5, 4, 3, 2, 1])) // NO
