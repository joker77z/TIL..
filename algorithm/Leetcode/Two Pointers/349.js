function solution(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [...set1].filter(number => set2.has(number));
}
// console.log(solution([1, 2, 2, 1], [2, 2]));
console.log(solution([4, 9, 5], [9, 4, 9, 8, 4]));
