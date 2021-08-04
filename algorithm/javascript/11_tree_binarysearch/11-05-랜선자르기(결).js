/*
    결정 알고리즘.
    이분 검색 문제다.

    
*/

function solution(nums, n) {
    // lt~rt
    let answer;
    let lt = 1;
    let rt = Math.max(...nums);
    // 이 길이로는 선을 몇개를 셀 수 있는지 함수를 만든다.
    function count(len) {
        let cnt = 0;//개수 구한다.
        for(let x of nums) {
            cnt += Math.floor(x/len);
        }
        return cnt;
    }
    while(lt<=rt) {
        let mid=parseInt((lt+rt)/2);
        if(count(mid) >= n) {
            answer = mid;
            lt = mid+1;
        }
        else {
            rt = mid-1;
        }
    }
    return answer;
}
console.log(solution([802, 743, 457, 539], 11));