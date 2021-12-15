function solution(s, k) {
  const maxUnique = new Set(s).size;
  console.log('maxUnique: ', maxUnique);
  let maxLen = 0;

  for (let i = 1; i <= maxUnique; i++) {
    const maxUnique = new Set(s).size;
    let maxLen = 0;

    for (let i = 1; i <= maxUnique; i++) {
      let hashMap = {},
        atLeastK = 0,
        uniqueCount = 0,
        left = 0;

      console.log(i);
      for (let right = 0; right < s.length; right++) {
        hashMap[s[right]] = hashMap[s[right]] + 1 || 1;
        console.log(hashMap[s[right]]);

        console.log(atLeastK, uniqueCount);
        if (hashMap[s[right]] === k) atLeastK++;
        if (hashMap[s[right]] === 1) uniqueCount++;
        console.log(atLeastK, uniqueCount);

        while (uniqueCount > i) {
          console.log(atLeastK);
          if (hashMap[s[left]] === k) atLeastK--;
          console.log(atLeastK);

          console.log(hashMap[s[left]]);
          hashMap[s[left]]--;
          console.log(hashMap[s[left]]);

          console.log(uniqueCount);
          if (hashMap[s[left]] === 0) uniqueCount--;
          console.log(uniqueCount);

          console.log(left);
          left++;
          console.log(left);
        }

        console.log(uniqueCount, i, atLeastK);
        if (uniqueCount === i && atLeastK === i) {
          maxLen = Math.max(maxLen, right - left + 1);
          console.log('maxLen: ', maxLen);
        }
      }
    }

    return maxLen;
  }
}
console.log(solution('aaabb', 2));
