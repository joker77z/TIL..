/*
    초코볼

    집에 초코볼과자 봉지 N개(1~10000)
    l번째 봉지에 nums[i]개의 초코볼 들어있다.

    현수는 다 먹기로함. 동생 H시간 후 오기전에.
    현수는 시간당 K개 먹고 모든 과자를 H시간안에 다 먹기로 함.

    현수가 시간당 몇 개 K 먹으면 H시간안에 다 먹을까?

    최소개수 K를 구해라.

    --------------

    단, 한 개의 과자에 K개 미만있다하면 1시간은 소비해야 된다.
    예를들어 과자봉지에 12개 초코볼 있으면, 시간당 5개(K=5)먹는다면 다먹는데 3시간
    소비하고 다음 과자 먹는다.
*/
// (과자 봉지에 들어있는 초코볼 개수, 과자를 모두 먹는데 허용되는 시간)

function solution(nums, h) {
    let answer = Number.MAX_SAFE_INTEGER;
    nums = nums.sort((a, b) => a-b);
    let lt = nums[0]; // 5
    let rt = nums[nums.length-1]; // 24
    let tmp = [];
    function count(mid) {
        let cnt = 0;
        for(let x of nums) {
            if(x>mid) {
                cnt += Math.ceil(x/mid);
                answer = mid
            }
            else {
                cnt++;
            }
        }
        return cnt;
    }
    while(lt<=rt) {
        let mid = parseInt((lt+rt)/2);
        if(count(mid)>h) {
            lt = mid+1
        }
        else {
            tmp.push(mid);
            rt = mid-1
        }
    }
    return answer;
}
console.log(solution([29, 12, 24, 5, 19], 6)) // 24
console.log(solution([29, 12, 24, 5, 19, 12, 25, 23], 12)); //19
console.log(solution([29, 12, 24, 5, 19, 12, 25, 23, 82, 100], 15)); //29
