/*
    8.4 PM 11:55 ~ 12:07

    문제
    
    N개의 숫자. 오름차순으로 정렬한 다음 N개의 수 중
    한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서
    몇번째에 있는지 구하도록. 
*/

function solution(nums, m) {
    // 32가 배열에서 어디있는지 찾기. 이분 검색.
    let answer = 0;
    let lt = 0;
    let rt = nums.length-1;
    
    // 이분검색으로 찾기 위해서 배열을 오름차순한다.
    nums.sort();
    while(lt<=rt) {
        let mid = parseInt((lt+rt)/2);
        if(nums[mid] === m) {
            console.log(`nums : ${nums}`);
            answer = mid + 1;
            break;
        }
        else if (nums[mid] > m) {// 더 클 떄
            rt = mid - 1;
        }
        else {
            lt = mid +1;
        }
    }
    return answer;
    
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32)) // 3