function solution(brackets) {
  const bracketCompare = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === '(' || brackets[i] === '[' || brackets[i] === '{') {
      stack.push(brackets[i]);
    } else if (bracketCompare[stack.pop()] !== brackets[i]) {
      console.log(stack);
      return false;
    }
    console.log(stack);
  }
  if (stack.length > 0) return false;
  return true;
}
console.log(solution('())'));
console.log(solution('(('));
