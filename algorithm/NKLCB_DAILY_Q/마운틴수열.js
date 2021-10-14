function solution(nums) {
    let n = nums.length;
    // dy[i] : i번째 항이 마지막 항이 되는 최대 부분 증가 수열의 길이
    let dy = Array.from({
        length: n
    });
    dy[0] = 1; // 혼자 한개
    // dx[i] : i번째 항이 마지막 항이 되는 최대 부분 감소 수열의 길이
    let dx = Array.from({
        length: n
    });
    dx[n - 1] = 1; // 혼자 한개.

    // 최대 부분 증가 수열 구함
    for (let i = 0; i < n; i++) {
        let max = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i] && dy[j] > max) {
                max = dy[j];
            }
        }
        dy[i] = max + 1;
    }

    // 최대 부분 감소 수열 구함
    for (let i = n - 1; i >= 0; i--) {
        let max = 0;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[i] && dx[j] > max) {
                max = dx[j];
            }
        }
        dx[i] = max + 1;
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
        answer = Math.max(dy[i] + dx[i] - 1, answer);
    }
    return answer;
}