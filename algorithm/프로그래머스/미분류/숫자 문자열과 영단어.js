/**
 * 숫자를 건낼 때
 * 일부 자릿수를 영단어로 바꾼 카드를 건네주면
 * 원래 숫자를 찾는 게임
 *
 * 1478 -> "one4seveneight"
 * 234567 -> "23four5six7"
 *
 * 일부 자리수가 영단어로 바뀌거나 바뀌지 않고 그대로인 문자열s
 * s가 원래 숫자를 return 하도록.
 */

function solution(s) {
  const stringToNum = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };
  let answer = '';
  let tmp = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      // 숫자면
      if (tmp) {
        answer += stringToNum[tmp] + s[i];
        tmp = '';
      } else {
        answer += s[i];
      }
    } else {
      if (stringToNum[tmp]) {
        answer += stringToNum[tmp];
        tmp = '';
      }
      tmp += s[i];
    }
  }
  if (tmp) {
    answer += stringToNum[tmp];
  }
  return Number(answer);
  // return answer;
}
// console.log(solution('one4seveneight'));
console.log(solution('23four5six7')); // 234567
