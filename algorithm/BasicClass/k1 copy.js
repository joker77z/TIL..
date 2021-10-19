// 문제 개짜증난다. 그럼 이렇게 구하면 된다. 알파벳 소문자니까.
// 알파벳 개수 셀필요없다. 그냥 넉넉하니 30개 잡아도 상관없다.
// ch 배열2개 잡아서 a다 charcodeat하면 97이고. 97-97해서 0해서
// ch[0]에 1 더하고 ch2에 인덱스 번호를 더한다.

// POINT: 이건 숙제. 소문자니까. 97을 빼면 된다.
function solution(string) {
  let sH = new Map();
  for (let i = 0; i < string.length; i++) {
    if (sH.has(string[i])) {
      let tmp = sH.get(string[i]);
      sH.set(string[i], [tmp[0] + 1, tmp[1]]);
    } else {
      sH.set(string[i], [1, i]);
    }
  }
  console.log(sH);
  for (let [key, value] of sH) {
    // 지금 가장 작ㅇ느 값 찾는다고하면 idx에 엄청 큰 수를 넣어놓고.
    // 돌면서 if val[0] === 1 && val[1] <idx
    // idx = val[1];
    // answer = key로.
    // val[1], idx. 3과 4를 비교해라.
  }
}
console.log(solution('statistics'));
