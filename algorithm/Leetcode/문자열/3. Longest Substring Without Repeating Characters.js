function solution(s) {
  if (s.length < 2) return s.length;
  let char_set = new Set(s[0]); // initially just add the first char to the set & start the right pointer and index 1.
  let left_char_index = 0;
  let longest_substring_length = 0;

  for (let right_char_index = 1; right_char_index < s.length; right_char_index++) {
    // Check for duplicates, if we have a dupe, shift the pointer forward until we no longer have duplicates.
    while (char_set.has(s[right_char_index])) {
      char_set.delete(s[left_char_index]);
      left_char_index++;
      debugger;
    }
    char_set.add(s[right_char_index]);
    longest_substring_length = Math.max(longest_substring_length, char_set.size);
  }
  return longest_substring_length;
}
console.log(solution('abcabcbb'));
