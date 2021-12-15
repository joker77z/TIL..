// /**
//  * 차이가 2인 숫자들 반환
//  */
function solution(nums, k) {
  const set = new Set();
  const answer = new Set();
  nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length; ++i) {
    if (set.has(nums[i] - k)) {
      console.log('✅i', i);
      console.log(`if-set :`, set);
      answer.add(`${nums[i]}, ${nums[i] - k}`);
      console.log(`🌟answer:`, answer);
    }

    set.add(nums[i]);
    console.log(`addset`, set, `✅i`, i);
  }
  return answer.size;
}

function solution(nums, k) {
  let map = new Map();
  let answer = 0;

  for (let i = 0; i < nums.length; ++i) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  console.log(map);
  map.forEach((count, key) => {
    if (k === 0) {
      if (count > 1) answer++;
    } else {
      if (map.has(key + k)) answer++;
    }
  });
  return answer;
}

// console.log(solution([3, 1, 4, 1, 5], 2));
console.log(solution([1, 3, 1, 5, 4], 0));
