/*
    문제
    
    N개의 숫자. 오름차순으로 정렬한 다음 N개의 수 중
    한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서
    몇번째에 있는지 구하도록. 
*/

// 이분검색을 쓰려면 정렬이 일단 되어있어야 한다.

function solution(nums, m) {
    let answer;
    nums.sort();
    let lt = 0, rt=nums.length-1;
    while(lt<=rt) {
        let mid = parseInt((lt+rt)/2);
        if(nums[mid]===m){
            answer = mid+1;
            break;
        }
        else if(nums[mid]>m) rt=mid-1;
        else lt=mid+1;
    }
    return answer;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32)) // 3