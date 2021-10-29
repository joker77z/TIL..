function solution(s, indices) {
  const ans = [];
  const map = new Map();
  for (let i = 0; i < indices.length; i++) {
    map.set(indices[i], s[i]);
  }
  for (let i = 0; i < indices.length; i++) {
    ans.push(map.get(i));
  }
  return ans.join('');
}
console.log(solution('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
