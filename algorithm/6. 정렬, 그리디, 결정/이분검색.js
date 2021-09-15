/*
    이분 탐색
    k가 오름차순으로 정렬된 상태에서 몇번째에 있는지 return

    이분 탐색을 하기 위해서는 오름차순으로 정렬된 상태에서
    left, right를 양쪽 값을 주고 mid값 잡아준다.
    mid값과 구하고자하는 값 비교
    mid보다 값이 더 크다면 left를 mid+1
    더 낮으면 right를 mid-1
*/

function solution(nums, k) {
    nums.sort((a, b) => a-b);
    let answer = 0;
    let lt = 0;
    let rt = nums.length-1;
    
    let flag = true;
    while(flag) {
        let mid = parseInt((rt+lt) / 2);
        if(nums[mid] === k) {
            answer = mid+1;
            flag = false;
            break;
        }
        else if(nums[mid] > k) {
            rt = mid-1;
        }
        else { // mid보다 오른쪽에 있을 때
            lt = mid+1;
        }
    }
    return answer;
} 
console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));