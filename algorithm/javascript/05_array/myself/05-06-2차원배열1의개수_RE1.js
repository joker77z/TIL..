function solution(nums) {
    let tmp = [];
    let answer = [];
    let n = nums.length;
    let nH = new Map();
    for(let i=0; i<n; i++) {
        for(let x of nums[i]) {
            if(x === 1) {
                nH.set(i, nH.get(i)+1 || 1);
            }
        }
    }
    for(let [key, value] of nH) {
        tmp.push([key, value])
    }
    answer = tmp.sort((a, b) => a[1] - b[1]).map(el => el[0]);

    return answer;
}

console.log(solution([[1, 0, 0, 1], [0, 0, 0, 1], [1, 1, 0, 1], [0, 1, 0, 1]]))