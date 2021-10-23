function solution(n) {
  let tmp = '';
  while (n > 0) {
    tmp += n % 2;
    n = parseInt(n / 2);
  }

  // 숫자만들기
  // let test = 0;
  // test = n.toString(2);
  // console.log(test);
  // console.log(tmp);
  // tmp = tmp.split('').reverse().join('');
  // console.log(tmp);

  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] === tmp[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(solution(11));
