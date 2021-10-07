const isPalindrome = string => {
  const result = string
    .replace(/[~!@#$%^&*()_+|<>?:;{},]/gi, '')
    .replace(/ /g, '')
    .toLowerCase()
    .trim()
    .split('');

    const mid = 
  // const compareResult = [...result].reverse();
  // return result === compareResult ? 'true' : 'false';
};

isPalindrome('A man, a plan, a canal: Panama');

/*
function solution(s) {
  let ans = 'YES';
  s = s
    .replace(/[~!@#$%^&*()_+|<>?:;{}]/gi, '')
    .replace(/ /g, '')
    .toLowerCase()
    .trim();
  const mid = s.length / 2;
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      console.log(s[i], s[s.length - i - 1]);
      ans = 'NO';
    }
  }
  return ans;
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof')); // YES
*/
